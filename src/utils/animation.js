export const staggerInParentStates = {
	start: { opacity: 0 },
	end: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			ease: 'easeIn',
		},
	},
};
export const staggerInChildStates = {
	start: { opacity: 0, y: 20, rotateX: 20 },
	end: { opacity: 1, y: 0, rotateX: 0 },
};
