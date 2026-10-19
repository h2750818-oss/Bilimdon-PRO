import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import { Language } from '../types';
import { useTranslation } from '../i18n/translations';

interface ResetConfirmModalProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  currentLang,
  isOpen,
  onClose,
  onConfirmReset,
}) => {
  const t = useTranslation(currentLang);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
            <Trash2 className="w-6 h-6" />
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label={t.cancelResetBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2">
          <h2 id="reset-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
            {t.resetModalTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.resetModalWarning}
          </p>
          <p className="text-xs font-semibold text-rose-600 dark:text-rose-400">
            {t.resetModalDisclaimer}
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {t.cancelResetBtn}
          </button>
          <button
            type="button"
            onClick={onConfirmReset}
            className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-xs"
          >
            {t.confirmResetBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
