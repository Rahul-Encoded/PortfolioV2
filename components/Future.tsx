import React from "react";

const futureProjects = [
  {
    id: 1,
    title: "Invested in Neural Network from Scratch",
    description:
      "Building a neural network from the ground up without relying on deep learning libraries, implementing forward and backward propagation, activation functions, and optimizers from scratch.",
  },
  {
    id: 2,
    title: "Reading to build an LLM from Scratch",
    description:
      "Developing a large language model from scratch, including tokenization, transformer architecture, training pipeline, and fine-tuning on custom datasets.",
  },
  {
    id: 3,
    title: "AI Interviewer in Queue",
    description:
      "A voice-based AI interviewer that dynamically generates and adapts interview questions based on candidate responses. Supports real-time feedback and final reports.",
  },
];

function Future() {
  return (
    <section className="text-primary py-20 backdrop-blur">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-5xl font-extrabold sticky top-20">CURRENTLY🚀</h2>
        </div>
        <div className="md:w-3/4">
          {futureProjects.map((project) => (
            <div key={project.id} className="mb-16 flex items-start">
              <div className="text-primary/50 font-bold text-5xl mr-6">
                {project.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Future;
