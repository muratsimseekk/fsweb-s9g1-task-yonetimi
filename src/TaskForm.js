import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import { useForm } from "react-hook-form";

const TaskForm = ({ kisiler, submitFn }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    people: [],
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { ...formData },
    mode: "all",
  });

  const onSubmitHandler = (lastData) => {
    console.log(lastData);
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          {...register("title", {
            required: "Task başlığı yazmalısınız.",
            minLength: {
              value: 3,
              message: "Task başlığı en az 3 karakter olmalı",
            },
          })}
        />
        <p className="input-error">{errors?.title?.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          name="description"
          {...register("description", {
            required: "Task açıklaması yazmalısınız",
            minLength: {
              value: 10,
              message: "Task açıklaması en az 10 karakter olmalı",
            },
          })}
        ></textarea>
        <p className="input-error">{errors?.description?.message}</p>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
                {...register("people", {
                  required: "En fazla 3 kişi seçebilirsiniz",
                  maxLength: 3,
                  // min: 1,
                })}
              />
              {p}
            </label>
          ))}
        </div>
        <p className="input-error">{errors?.people?.message}</p>
      </div>

      <div className="form-line">
        <button className="submit-button" type="submit" disabled={!isValid}>
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
