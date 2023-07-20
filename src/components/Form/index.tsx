import React from 'react';
import InputText, { InputSelect } from './Input';
import styles from './form.module.css';

function Form() {
  return (
    <section className={styles.content}>
      <div className={styles.title}>
        <h1>Nuevo registro</h1>
      </div>
      <form className={styles.formu}>
        <InputText
          propsInput={{
            id: "descriptionInput",
            placeholder: "Description",
            label: "Description",
            type: "text",
          }}
        />
        <InputText
          propsInput={{
            id: "numBiWeeklyInput",
            placeholder: "Número de Quincena",
            label: "Número de Quincena",
            type: "number",
          }}
        />
        <InputSelect
          options={
            [
              {
                label: "Enero",
                value: 1,
              },
              {
                label: "Febrero",
                value: 2,
              },
              {
                label: "Marzo",
                value: 3,
              },
              {
                label: "Abril",
                value: 4,
              },
              {
                label: "Mayo",
                value: 5,
              },
              {
                label: "Junio",
                value: 6,
              },
              {
                label: "Julio",
                value: 7,
              },
              {
                label: "Agosto",
                value: 8,
              },
              {
                label: "Septiembre",
                value: 9,
              },
              {
                label: "Octubre",
                value: 10,
              },
              {
                label: "Noviembre",
                value: 11,
              },
              {
                label: "Diciembre",
                value: 12,
              },
            ]
          }
          propsInput={{
            id: "monthInput",
            placeholder: "Mes",
            label: "Mes de la quincena",
          }}
        />
        <InputText
          propsInput={{
            id: "budgetInput",
            placeholder: "Presupuesto",
            label: "Presupuesto",
            type: "number",
          }}
        />
        <button className={styles['btn-menu']} type="button">Guardar registro</button>
      </form>
    </section>
  );
}

export default Form;
