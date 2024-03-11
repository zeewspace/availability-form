import latam from "../latam.json";
import { Field } from "formik";

export const TimeZone = ({ name }) => (
  <Field
    className="bg-slate-700 border-white/30 border rounded-sm outline-none"
    as="select"
    name={name}
  >
    {latam.map((localnames, indexlocal) => {
      return (
        <optgroup
          key={indexlocal}
          label={`${localnames.name} ${localnames.emoji}`}
        >
          {localnames.timezones.map((timezones, indexzones) => {
            return <option key={indexzones}>{timezones}</option>;
          })}
        </optgroup>
      );
    })}
  </Field>
);
