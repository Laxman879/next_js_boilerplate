type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={"w-full relative min-h-screen " + className}>
      {children}
    </div>
  );
};

export default Container;
