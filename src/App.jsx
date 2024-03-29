import { Formik, Form, FieldArray } from "formik";
import Field from "./Components/Input";
import Select from "./Components/Select";
import { useState } from "react";
import { TimeZone } from "./Components/TimeZone";

const Days = [
  { name: "lunes", value: "lunes" },
  { name: "martes", value: "martes" },
  { name: "miercoles", value: "miercoles" },
  { name: "jueves", value: "jueves" },
  { name: "viernes", value: "viernes" },
  { name: "sabado", value: "sabado" },
  { name: "domingo", value: "domingo" },
];

const App = () => {
  const [local, setLocal] = useState(null);

  return (
    <div className="p-3">
      <div className="bg-slate-900 p-3 max-w-xl m-auto rounded-md border-white/30 border">
        <Formik
          initialValues={{
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            days: [
              {
                day: "lunes",
                times: [
                  {
                    start: `${new Date().getHours()}:${new Date().getMinutes()}`,
                    end: `${
                      new Date().getHours() + 1
                    }:${new Date().getMinutes()}`,
                  },
                ],
              },
            ],
          }}
          onSubmit={(values) => {
            setLocal(values);
          }}
        >
          {({ values }) => (
            <Form className="flex flex-col gap-2">
              <TimeZone name="timezone" />
              <FieldArray name="days">
                {({ push, remove: removeDay }) => (
                  <div>
                    {values.days.length > 0 &&
                      values.days.map((days, index) => {
                        return (
                          <div
                            className="flex flex-col mb-2 bg-slate-500 p-2 rounded-sm border border-slate-300/30"
                            key={index}
                          >
                            <div className="flex items-center gap-3">
                              <Select
                                name={`days.${index}.day`}
                                options={Days}
                              />
                              <button
                                type="button"
                                className="text-neutral-300 bg-red-400 w-5 h-5 flex items-center justify-center rounded-sm"
                                onClick={() => removeDay(index)}
                              >
                                x
                              </button>
                            </div>
                            <FieldArray name={`days.${index}.times`}>
                              {({ push: pushTime, remove: removeTime }) => (
                                <>
                                  {days.times.map((times, timeIndex) => {
                                    return (
                                      <div
                                        key={timeIndex}
                                        className="flex gap-2 mt-1 items-center"
                                      >
                                        <p>Inicio</p>
                                        <Field
                                          type="time"
                                          name={`days.${index}.times.${timeIndex}.start`}
                                        />
                                        <p>Final</p>
                                        <Field
                                          type="time"
                                          name={`days.${index}.times.${timeIndex}.end`}
                                        />
                                        <button
                                          type="button"
                                          className="text-neutral-300  w-5 h-5 flex items-center justify-center rounded-sm"
                                          onClick={() => removeTime(timeIndex)}
                                        >
                                          x
                                        </button>
                                      </div>
                                    );
                                  })}
                                  <button
                                    type="button"
                                    className="hover:bg-slate-400 bg-slate-400/50 mt-3 rounded-md"
                                    onClick={() =>
                                      pushTime({
                                        start: `${new Date().getHours()}:${new Date().getMinutes()}`,
                                        end: `${
                                          new Date().getHours() + 1
                                        }:${new Date().getMinutes()}`,
                                      })
                                    }
                                  >
                                    Agregar otro rango
                                  </button>
                                </>
                              )}
                            </FieldArray>
                          </div>
                        );
                      })}
                    <button
                      type="button"
                      className="bg-slate-500 px-3 rounded-sm"
                      onClick={() =>
                        push({
                          day: "lunes",
                          times: [
                            {
                              start: `${new Date().getHours()}:${new Date().getMinutes()}`,
                              end: `${
                                new Date().getHours() + 1
                              }:${new Date().getMinutes()}`,
                            },
                          ],
                        })
                      }
                    >
                      Agregar otro dia
                    </button>
                  </div>
                )}
              </FieldArray>

              <button className="bg-slate-400">Generar Codigo</button>
            </Form>
          )}
        </Formik>
      </div>
      {local && (
        <div className="bg-slate-900 p-3 max-w-xl m-auto rounded-md border-white/30 border mt-2">
          <p className="border-l-2 pl-2 border-white/50 bg-white/10 mb-3">
            Coloca este codigo en bot, primero deberas ejecuta el comando
            /availability
          </p>
          <pre className="text-wrap">{JSON.stringify(local)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
