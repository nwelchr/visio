"use client";

import React, { useState } from "react";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { getRandomPrompt } from "@/lib/utils";
import FormField from "@/components/FormField";
import Image from "next/image";
import Loader from "@/components/Loader";

const CreatePost = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log("form", form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSupriseMe = () => {
    setForm((prev) => ({ ...prev, prompt: getRandomPrompt(form.prompt) }));
  };

  const generateImage = async () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-slate-900 text-4xl">
          Create New Image
        </h1>
        <p className="text-slate-600 text-medium max-w-xl pt-2">
          Create imaginative and visually stunning images with DALLE AI and
          share them with the community.
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A regal chicken standing proudly on a velvet throne"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSupriseMe}
          />
          <div className="relative bg-slate-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <Image
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <PhotoIcon className="size-30 text-slate-500" strokeWidth={0.5} />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-gray-900/50">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            disabled={generatingImg}
            className="text-white bg-emerald-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-slate-600">
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          <button
            className="mt-3 text-white bg-slate-600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            type="submit"
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
