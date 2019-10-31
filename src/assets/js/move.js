import {
	getMousePos,
	getElePosByElement
} from 'utils/resolve';

import {
	MousePosition
} from 'utils/mouse';

export default class MoveAble {
	static create(
		ele,
		beforeDrag = () => {},
		afterDrag = () => {},
		onDrag = () => {}
	) {
		return new MoveAble(ele, beforeDrag, afterDrag, onDrag);
	}

	constructor(ele, beforeDrag, afterDrag, onDrag) {
		this.ele = ele;
		this.dragAble = true;
		this.elePos = getElePosByElement(ele);
		this.originMousePos = [0, 0];
		this.ele.onmousedown = this.onmousedown;
		this.ele.ontouchstart = this.ontouchstart;
		this.beforeDrag = beforeDrag;
		this.afterDrag = afterDrag;
		this.onDrag = onDrag;
	}

	ontouchstart = ev => {
		if (!this.dragAble) return;
		MousePosition.start();
		const dom = this.ele;
		this.elePos = getElePosByElement(dom);
		this.originMousePos = getMousePos(ev);
		const removeListener = MousePosition.watch(this.afterValueChange);
		document.ontouchend = () => {
			if (!this.dragAble) return;
			removeListener();
			MousePosition.stop();
			this.afterDrag(getElePosByElement(dom));
			document.ontouchend = () => {};
		};
		this.beforeDrag(this.elePos);
	};

	onmousedown = ev => {
		if (!this.dragAble) return;
		MousePosition.start();
		const dom = this.ele;
		this.elePos = getElePosByElement(dom);
		this.originMousePos = getMousePos(ev);
		const removeListener = MousePosition.watch(this.afterValueChange);
		document.onmouseup = () => {
			if (!this.dragAble) return;
			removeListener();
			MousePosition.stop();
			this.afterDrag(getElePosByElement(dom), dom);
			document.onmouseup = () => {};
		};
		this.beforeDrag(this.elePos, dom);
	};

	afterValueChange = ({
		value
	}) => {
		this.changePos([
			value[0] - this.originMousePos[0],
			value[1] - this.originMousePos[1]
		]);
	};

	changePos([dx, dy]) {
		const currentPos = [this.elePos[0] + dx, this.elePos[1] + dy];
		[this.ele.style.left, this.ele.style.top] = currentPos.map(
			ele => `${ele}px`
		);
		this.onDrag(currentPos, this.ele);
	}

	getRealDom = () => this.ele;
}

export const createMoveAble = MoveAble.create;
