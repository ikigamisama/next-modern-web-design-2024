import ButtonSVG from "@/components/svg/ButtonSvg";

interface ButtonProps {
	className?: string;
	href?: string;
	onClick?: () => void;
	children: React.ReactNode;
	px?: string;
	white?: boolean;
}

const Button = ({
	className,
	href,
	onClick,
	children,
	px,
	white,
}: ButtonProps) => {
	const classes = `relative button inline-flex items-center jusitfy-center h-11 transition-colors hover:text-color-1 ${
		px || "px-7"
	} ${white ? "text-n-8 " : "text-n-1"} ${className || ""}`;

	const spanClasses = "relative z-10";

	const renderButton = () => (
		<button className={classes}>
			<span className={spanClasses}>{children}</span>
			<ButtonSVG white={white} />
		</button>
	);

	const renderLink = () => (
		<a href={href} className={classes}>
			<span className={spanClasses}>{children}</span>
			<ButtonSVG white={white} />
		</a>
	);

	return href ? renderLink() : renderButton();
};

export default Button;
