"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

import { PhotoIcon } from "@heroicons/react/24/outline";
import { getRandomPrompt } from "@/lib/utils";
import FormField from "@/components/FormField";
import Image from "next/image";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  prompt: string;
  photo: string;
}

const CreatePost = () => {
  const router = useRouter();

  const [form, setForm] = useState<FormData>({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://visio-kqqa.onrender.com/api/v1/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        await response.json();

        router.push("/");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert(
        "Please enter a prompt and generate an image to share with the community"
      );
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSupriseMe = () => {
    setForm((prev) => ({ ...prev, prompt: getRandomPrompt(form.prompt) }));
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://visio-kqqa.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: form.prompt }),
          }
        );

        const data = await response.json();

        setForm((prev) => ({
          ...prev,
          photo: data.photo,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt to generate an image");
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-slate-900 dark:text-white text-4xl">
          Create New Image
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-medium max-w-xl pt-2">
          Create imaginative and visually stunning images with DALL-E AI and
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
          <div className="max-sm:self-center relative bg-slate-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-slate-600 focus:ring-2 focus:border-slate-600 dark:focus:ring-slate-400 dark:focus:border-slate-400 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <Image
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
                width={1024}
                height={1024}
              />
            ) : (
              <PhotoIcon
                className="size-30 text-slate-500 dark:text-slate-400"
                strokeWidth={0.5}
              />
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
            className="text-white bg-emerald-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-emerald-800 transition-all"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Once you have created the image you want, you can share it with
            others in the community.
          </p>
          <button
            className="mt-3 text-white bg-slate-600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-slate-700 transition-all"
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
