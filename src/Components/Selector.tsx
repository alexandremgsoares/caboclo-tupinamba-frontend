interface SelectorProps {
  icon: React.ElementType;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

function Selector({ children, icon: Icon, active, onClick }: SelectorProps) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-branco text-verde-claro-2" : ""
      } px-4 py-2 gap-2 border-1 border-branco text-branco rounded-xs flex font-crimson text-[18px] text-nowrap`}>
      <Icon className="text-inherit" />
      {children}
    </div>
  );
}

export default Selector;
