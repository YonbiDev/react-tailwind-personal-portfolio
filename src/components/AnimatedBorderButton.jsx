export const AnimatedBorderButton = ({
  children,
  href,
  className = "",
  size = "lg",
  variant = "outline",
  ...props
}) => {
  const Component = href ? "a" : "button";
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg",
  };
  const variantClasses = {
    outline: "bg-transparent border-border text-foreground hover:border-primary/50",
    outlineFill:
      "bg-transparent border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:shadow-primary/30",
    solid:
      "border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/45",
    solidPremium:
      "animated-border-solid border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/35 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-transparent hover:text-primary hover:shadow-primary/20",
  };

  return (
    <Component
      href={href}
      className={`relative inline-flex items-center justify-center border 
        transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        font-medium rounded-full overflow-visible 
        animated-border ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {variant === "solidPremium" && (
        <span aria-hidden="true" className="button-stars">
          {[1, 2, 3, 4, 5, 6].map((star) => (
            <svg
              key={star}
              className={`button-star button-star-${star}`}
              viewBox="0 0 24 24"
            >
              <path
                className="button-star-fill"
                d="M12 1.8 14.8 9l7.4 3-7.4 3L12 22.2 9.2 15l-7.4-3 7.4-3L12 1.8Z"
              />
            </svg>
          ))}
        </span>
      )}
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};
