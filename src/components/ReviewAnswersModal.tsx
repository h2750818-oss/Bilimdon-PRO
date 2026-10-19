import React from 'react';
import { X, Check, AlertCircle } from 'lucide-react';
import { Language, Question, UserAnswerRecord } from '../types';
import { useTranslation } from '../i18n/translations';

interface ReviewAnswersModalProps {
  currentLang: Language;
  questions: Question[];
  userAnswers: UserAnswerRecord[];
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewAnswersModal: React.FC<ReviewAnswersModalProps> = ({
  currentLang,
  questions,
  userAnswers,
  isOpen,
  onClose,
}) => {
  const t = useTranslation(currentLang);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 id="review-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
              {t.reviewModalTitle}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {t.reviewModalSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={t.closeBtn}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Question List */}
        <div className="p-6 overflow-y-auto space-y-6">
          {questions.map((q, idx) => {
            const answerRecord = userAnswers.find((a) => a.questionId === q.id);
            const userIndex = answerRecord ? answerRecord.selectedIndex : -1;
            const isCorrect = answerRecord ? answerRecord.isCorrect : false;

            return (
              <div
                key={q.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    {t.questionOf} {idx + 1}
                  </div>
                  <div
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{t.correctBadge}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{t.incorrectBadge}</span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                  {q.question[currentLang]}
                </p>

                {/* Options summary */}
                <div className="space-y-1.5 pt-1 text-xs">
                  {q.options[currentLang].map((optText, optIdx) => {
                    const isUserChoice = userIndex === optIdx;
                    const isCorrectAnswer = q.correctIndex === optIdx;

                    let optStyle =
                      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';

                    if (isCorrectAnswer) {
                      optStyle =
                        'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-600 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isUserChoice && !isCorrectAnswer) {
                      optStyle =
                        'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-600 text-rose-900 dark:text-rose-200 line-through';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`flex items-center justify-between p-2.5 rounded-lg border ${optStyle}`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-400">{optIdx + 1}.</span>
                          <span>{optText}</span>
                        </span>

                        {isCorrectAnswer && (
                          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                            ✓ {t.reviewCorrectAnswer}
                          </span>
                        )}
                        {isUserChoice && !isCorrectAnswer && (
                          <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400">
                            ✕ {t.reviewYourAnswer}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    {t.reviewExplanation}:{' '}
                  </span>
                  {q.explanation[currentLang]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end bg-slate-50/50 dark:bg-slate-900/50">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
