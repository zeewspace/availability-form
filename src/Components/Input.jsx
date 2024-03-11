import { Field as Input } from "formik";

const Field = ({ name, type, id }) => {
  return (
    <Input
      className="bg-slate-700 border-white/40 border rounded-sm outline-none px-2 box-border flex-1"
      name={name}
      type={type}
      id={id}
    />
  );
};

export default Field;
