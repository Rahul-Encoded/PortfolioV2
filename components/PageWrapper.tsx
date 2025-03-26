"use client";

import React from "react";
import {HTMLMotionProps, motion} from "framer-motion";

const PageWrapper = (props: HTMLMotionProps<"div">) => {
	return (
		<div className="bg-transparent">
			<motion.div {...props}
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 1}}
			/>
		</div>
	)
}

export default PageWrapper