import {
  useEffect,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
  closeDisabled?: boolean;
  maxWidthClassName?: string;
};

export default function Modal({
  open,
  title,
  description,
  children,
  onClose,
  closeDisabled = false,
  maxWidthClassName = "max-w-xl",
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !closeDisabled) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, closeDisabled, onClose]);

  if (!open) return null;

  function handleBackdropClick() {
    if (!closeDisabled) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onMouseDown={handleBackdropClick}
    >
      <div
        className={`w-full ${maxWidthClassName} overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="aurora-scrollbar max-h-[90vh] overflow-y-auto p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="modal-title"
                className="text-2xl font-bold text-white"
              >
                {title}
              </h2>

              {description && (
                <p className="mt-2 text-sm text-slate-400">
                  {description}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={closeDisabled}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}