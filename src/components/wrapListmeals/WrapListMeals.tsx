interface WrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function WrapSerchMeals({ title, children }: WrapperProps) {
  return (
    <>
      <h2>{title}</h2>
      <section className="wrapper-meals-search">{children}</section>
    </>
  );
}
