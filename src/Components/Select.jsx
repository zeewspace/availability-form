import { Field } from "formik";

/**
 *
 * @param {{options: {value: string, name: string}[], name: string, value: string}} opts
 * @returns
 */
const Select = (opts) => {
  return (
    <Field
      as="select"
      name={opts.name}
      className="bg-slate-700 border-white/30 border rounded-sm outline-none flex-1"
    >
      {opts.options.map((r) => {
        return (
          <option key={r.value} value={r.value}>
            {r.name}
          </option>
        );
      })}
    </Field>
  );
};

export default Select;
