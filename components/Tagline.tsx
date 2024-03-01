import brackets from "@/components/svg/Brackets";

interface TaglineProps {
	className?: string;
	children: React.ReactNode;
}

const TagLine = ({ className, children }: TaglineProps) => {
	return (
		<div className={`tagline flex items-center ${className || ""}`}>
			{brackets("left")}
			<div className='mx-3 text-n-3'>{children}</div>
			{brackets("right")}
		</div>
	);
};

export default TagLine;
