import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  const modalRef = useRef(null);
  const previousOverflow = useRef("");

  useEffect(() => {
    // Prevent background scroll while modal is open
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Close on Escape key
    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      // Restore overflow and cleanup
      document.body.style.overflow = previousOverflow.current || "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [closeModal]);

  return (
    // Backdrop: clicking it closes modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/50 backdrop-blur-sm"
      onClick={closeModal}
      aria-hidden="true"
    >
      {/* Motion container: stops propagation so clicks inside do not close */}
      <motion.div
        ref={modalRef}
        className="relative w-full max-w-3xl mx-4 rounded-2xl bg-gradient-to-l from-midnight to-navy border border-white/10 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()} // prevent backdrop click from firing
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Close button (also accessible) */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-md bg-midnight hover:bg-gray-700 z-20"
          aria-label="Close project details"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        {/* Content area: allow internal scrolling if content is tall */}
        <div className="max-h-[85vh] overflow-y-auto rounded-2xl">
          {/* Image / preview */}
          {image && (
            <div className="relative w-full bg-black rounded-t-2xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover block"
              />
            </div>
          )}

          {/* Text content */}
          <div className="p-6">
            <h5 id="project-modal-title" className="mb-2 text-2xl font-bold text-white">
              {title}
            </h5>

            <p className="mb-3 font-normal text-neutral-400">{description}</p>

            {Array.isArray(subDescription) &&
              subDescription.map((subDesc, index) => (
                <p key={index} className="mb-3 font-normal text-neutral-400">
                  {subDesc}
                </p>
              ))}

            {/* Tags and action */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-3 flex-wrap">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg w-10 h-10 object-contain hover:opacity-90"
                  />
                ))}
              </div>

             {/* <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-black font-medium rounded-md hover:brightness-95"
              >
                View Project
                <img src="assets/arrow-up.svg" className="w-4 h-4" alt="open" />
              </a>*/}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
