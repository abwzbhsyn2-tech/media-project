"use client";

import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  desc: string;
  image: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [editId, setEditId] = useState<number | null>(null);

  async function getProjects() {
    const res = await fetch("/api/projects", {
  cache: "no-store"
});
    const data = await res.json();
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, []);

  function handleImage(e: any) {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    setImage(URL.createObjectURL(file));
  }

  async function uploadImage() {
    if (!selectedFile) return image;

    const formData = new FormData();

    formData.append("file", selectedFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    return data.secure_url;
  }

  async function saveProject() {
    if (!name || !desc || !image) {
      alert("أكمل جميع البيانات");
      return;
    }

    const imageUrl = await uploadImage();
        if (editId) {
      await fetch("/api/projects", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editId,
          name,
          desc,
          image: imageUrl,
        }),
      });

      alert("تم تعديل المشروع");
    } else {
      await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          desc,
          image: imageUrl,
        }),
      });

      alert("تم إضافة المشروع");
    }

    clearForm();

    getProjects();
  }

  function editProject(project: Project) {
    setName(project.name);
    setDesc(project.desc);
    setImage(project.image);
    setSelectedFile(null);
    setEditId(project.id);
  }

  async function deleteProject(id: number) {
    await fetch("/api/projects", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    getProjects();
  }

  function clearForm() {
    setName("");
    setDesc("");
    setImage("");
    setSelectedFile(null);
    setEditId(null);
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-10">
      <h1 className="text-4xl font-bold text-[#0B1F3A] mb-10">
        إدارة المشاريع
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow max-w-2xl mb-10">
        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="اسم المشروع"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full border p-3 rounded mb-4"
          placeholder="وصف المشروع"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="mb-4"
        /> 
                {image && (
          <img
            src={image}
            alt="Preview"
            className="w-40 h-40 object-cover rounded mb-4"
          />
        )}

        <button
          onClick={saveProject}
          className="bg-[#F9C846] px-8 py-3 rounded-full font-bold"
        >
          {editId ? "حفظ التعديل" : "إضافة المشروع"}
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-6">
        المشاريع
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl shadow overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">
                {project.name}
              </h3>

              <p className="text-gray-600 mt-3">
                {project.desc}
              </p>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => editProject(project)}
                  className="bg-[#0B1F3A] text-white px-5 py-2 rounded-full"
                >
                  تعديل
                </button>

                <button
                  onClick={() => deleteProject(project.id)}
                  className="bg-red-600 text-white px-5 py-2 rounded-full"
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}