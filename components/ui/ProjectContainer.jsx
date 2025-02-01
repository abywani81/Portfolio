import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProjectContainer({ project }) {
	return (
		<CardContainer className="h-full inter-var self-start justify-stretch">
			<CardBody className="bg-gray-950 h-full relative group/card dark:hover:shadow-2xl  dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border">
				<CardItem translateZ="100" className="w-full relative">
					<div className="aspect-square w-full relative">
						<Image
							src={project.img}
							fill
							className="object-cover rounded-xl group-hover/card:shadow-xl"
							alt={project.name}
						/>
					</div>
					<CardItem
						as="div"
						className="absolute text-white bottom-3 right-3 bg-green-500/20 py-2 px-6 rounded-full text-sm border border-gray-600 backdrop-blur-sm"
						style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
					>
						{project.isWebapp ? "Web App" : "Mobile App"}
					</CardItem>
				</CardItem>
				<CardItem
					translateZ="50"
					className="mt-6 text-xl sm:text-2xl font-bold text-neutral-600 dark:text-white"
				>
					{project.name}
				</CardItem>

				<p className="text-sm text-gray-200 mt-4">{project.dec}</p>
				{project.hasCaseStudy && (
					<div className="flex  items-center mt-6">
						<CardItem
							translateZ={20}
							as="button"
							className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
						>
							<ArrowRight />
						</CardItem>
					</div>
				)}
			</CardBody>
		</CardContainer>
	)
}
