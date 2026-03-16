import React, { useState } from 'react';
import { GlassCard } from '../components/glass-card';
import { GlassButton } from '../components/glass-button';
import { GlassAlert } from '../components/glass-alert';
import { GlassToast } from '../components/glass-toast';
import { Star, ThumbsUp, ThumbsDown, Smile, Meh, Frown, Send, AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import { CodeBlock } from '../components/code-block';
import { sectionCodeSamples } from '../utils/section-code-samples';

interface FeedbackSectionProps {
  addToast: (variant: any, message: string, options?: any) => void;
}

export function FeedbackSection({ addToast }: FeedbackSectionProps) {
  const [starRating, setStarRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [npsScore, setNpsScore] = useState<number | null>(null);
  const [satisfactionLevel, setSatisfactionLevel] = useState<'happy' | 'neutral' | 'sad' | null>(null);
  const [thumbsRating, setThumbsRating] = useState<'up' | 'down' | null>(null);

  const handleStarClick = (rating: number) => {
    setStarRating(rating);
    addToast('success', `You rated ${rating} out of 5 stars!`, { title: 'Rating Submitted' });
  };

  const handleNpsClick = (score: number) => {
    setNpsScore(score);
    let category = '';
    if (score >= 9) category = 'Promoter';
    else if (score >= 7) category = 'Passive';
    else category = 'Detractor';
    addToast('success', `NPS Score: ${score} (${category})`, { title: 'Feedback Received' });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-white font-bold mb-4 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
          User Feedback & Ratings
        </h2>
        <p className="text-white/70 text-lg">
          Collect user ratings, reviews, and satisfaction scores
        </p>
      </div>

      {/* Star Rating */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-2">Star Rating</h3>
        <p className="text-white/60 text-sm mb-4">🖱️ Click on the stars below to submit your rating</p>
        
        <GlassCard padding="lg">
          <div className="space-y-6">
            {/* 5 Star Rating */}
            <div>
              <p className="text-white/70 text-sm mb-3">Rate your experience (1-5 stars)</p>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleStarClick(rating)}
                    onMouseEnter={() => setHoverRating(rating)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-all duration-200 hover:scale-125"
                  >
                    <Star
                      size={48}
                      className={`transition-all duration-200 ${
                        rating <= (hoverRating || starRating)
                          ? 'fill-yellow-400 text-yellow-400 drop-shadow-lg'
                          : 'text-white/30'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-4 text-white text-2xl font-bold">
                  {starRating > 0 ? `${starRating}.0` : '—'}
                </span>
              </div>
              {starRating > 0 && (
                <p className="text-white/70 text-sm mt-3">
                  {starRating === 5 && '⭐ Excellent! Thank you!'}
                  {starRating === 4 && '👍 Great! We appreciate your feedback!'}
                  {starRating === 3 && '👌 Good! We can do better!'}
                  {starRating === 2 && '😐 We will improve!'}
                  {starRating === 1 && '😞 Sorry to hear that. We will work harder!'}
                </p>
              )}
            </div>

            {/* Compact Star Rating Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="space-y-3">
                <p className="text-white/60 text-xs">Product Quality</p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white/70 text-sm ml-2">(4.8)</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white/60 text-xs">Customer Service</p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star size={20} className="text-white/30" />
                  <span className="text-white/70 text-sm ml-2">(4.2)</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white/60 text-xs">Delivery Speed</p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star size={20} className="fill-yellow-400/50 text-yellow-400/50" />
                  <span className="text-white/70 text-sm ml-2">(4.5)</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-white/60 text-xs">Value for Money</p>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((star) => (
                    <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  {[4, 5].map((star) => (
                    <Star key={star} size={20} className="text-white/30" />
                  ))}
                  <span className="text-white/70 text-sm ml-2">(3.0)</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* NPS Score */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-2">Net Promoter Score (NPS)</h3>
        <p className="text-white/60 text-sm mb-4">🖱️ Click on a number to select your likelihood to recommend</p>
        
        <GlassCard padding="lg">
          <p className="text-white/70 text-sm mb-4">
            How likely are you to recommend our product to a friend or colleague?
          </p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                <button
                  key={score}
                  onClick={() => handleNpsClick(score)}
                  className={`
                    w-14 h-14 rounded-xl
                    backdrop-blur-md
                    border-2
                    transition-all duration-200
                    hover:scale-110
                    ${
                      npsScore === score
                        ? score >= 9
                          ? 'bg-green-500/30 border-green-400 text-white shadow-lg shadow-green-500/50'
                          : score >= 7
                          ? 'bg-yellow-500/30 border-yellow-400 text-white shadow-lg shadow-yellow-500/50'
                          : 'bg-red-500/30 border-red-400 text-white shadow-lg shadow-red-500/50'
                        : 'bg-white/5 border-[var(--glass-border)] text-white/70 hover:border-white/40'
                    }
                  `}
                >
                  <span className="text-xl font-bold">{score}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between text-white/50 text-xs">
              <span>Not likely at all</span>
              <span>Extremely likely</span>
            </div>
            {npsScore !== null && (
              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-semibold">
                  Score: {npsScore} - {' '}
                  {npsScore >= 9 && <span className="text-green-400">Promoter 🎉</span>}
                  {npsScore >= 7 && npsScore < 9 && <span className="text-yellow-400">Passive 😐</span>}
                  {npsScore < 7 && <span className="text-red-400">Detractor 😞</span>}
                </p>
              </div>
            )}
          </div>
        </GlassCard>
      </div>

      {/* Satisfaction Level */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-2">Satisfaction Level</h3>
        <p className="text-white/60 text-sm mb-4">🖱️ Click on an emoji to express your satisfaction level</p>
        
        <GlassCard padding="lg">
          <p className="text-white/70 text-sm mb-6">How satisfied are you with our service?</p>
          <div className="flex justify-center gap-8">
            <button
              onClick={() => {
                setSatisfactionLevel('happy');
                addToast('success', 'Thank you for your positive feedback!', { title: 'Very Satisfied' });
              }}
              className={`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${
                  satisfactionLevel === 'happy'
                    ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-500/30'
                    : 'bg-white/5 border-[var(--glass-border)] hover:border-green-400/50'
                }
              `}
            >
              <Smile size={64} className={satisfactionLevel === 'happy' ? 'text-green-400' : 'text-white/70'} />
              <span className="text-white text-sm font-medium">Very Satisfied</span>
            </button>
            
            <button
              onClick={() => {
                setSatisfactionLevel('neutral');
                addToast('info', 'Thank you for your feedback!', { title: 'Neutral' });
              }}
              className={`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${
                  satisfactionLevel === 'neutral'
                    ? 'bg-yellow-500/20 border-yellow-400 shadow-lg shadow-yellow-500/30'
                    : 'bg-white/5 border-[var(--glass-border)] hover:border-yellow-400/50'
                }
              `}
            >
              <Meh size={64} className={satisfactionLevel === 'neutral' ? 'text-yellow-400' : 'text-white/70'} />
              <span className="text-white text-sm font-medium">Neutral</span>
            </button>
            
            <button
              onClick={() => {
                setSatisfactionLevel('sad');
                addToast('warning', 'We are sorry to hear that. We will improve!', { title: 'Not Satisfied' });
              }}
              className={`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${
                  satisfactionLevel === 'sad'
                    ? 'bg-red-500/20 border-red-400 shadow-lg shadow-red-500/30'
                    : 'bg-white/5 border-[var(--glass-border)] hover:border-red-400/50'
                }
              `}
            >
              <Frown size={64} className={satisfactionLevel === 'sad' ? 'text-red-400' : 'text-white/70'} />
              <span className="text-white text-sm font-medium">Not Satisfied</span>
            </button>
          </div>
        </GlassCard>
      </div>

      {/* Thumbs Up/Down */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-2">Quick Rating</h3>
        <p className="text-white/60 text-sm mb-4">🖱️ Click thumbs up or down to rate</p>
        
        <GlassCard padding="lg">
          <p className="text-white/70 text-sm mb-6">Was this helpful?</p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => {
                setThumbsRating('up');
                addToast('success', 'Glad you found this helpful!', { title: 'Thanks!' });
              }}
              className={`
                flex flex-col items-center gap-3 p-8 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${
                  thumbsRating === 'up'
                    ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-500/30'
                    : 'bg-white/5 border-[var(--glass-border)] hover:border-green-400/50'
                }
              `}
            >
              <ThumbsUp size={48} className={thumbsRating === 'up' ? 'text-green-400' : 'text-white/70'} />
              <span className="text-white font-medium">Yes</span>
              {thumbsRating === 'up' && <span className="text-green-400 text-sm">Thank you!</span>}
            </button>
            
            <button
              onClick={() => {
                setThumbsRating('down');
                addToast('warning', 'We will work to improve!', { title: 'Thanks for feedback' });
              }}
              className={`
                flex flex-col items-center gap-3 p-8 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${
                  thumbsRating === 'down'
                    ? 'bg-red-500/20 border-red-400 shadow-lg shadow-red-500/30'
                    : 'bg-white/5 border-[var(--glass-border)] hover:border-red-400/50'
                }
              `}
            >
              <ThumbsDown size={48} className={thumbsRating === 'down' ? 'text-red-400' : 'text-white/70'} />
              <span className="text-white font-medium">No</span>
              {thumbsRating === 'down' && <span className="text-red-400 text-sm">Sorry to hear</span>}
            </button>
          </div>
        </GlassCard>
      </div>

      {/* Review Cards */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard padding="lg">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white font-bold">Sarah Johnson</h4>
                  <p className="text-white/50 text-xs">2 days ago</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Absolutely love the design system! The glassmorphism effects are stunning and the components are very easy to use.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs">Quality</span>
                <span className="px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs">Design</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white font-bold">Michael Chen</h4>
                  <p className="text-white/50 text-xs">1 week ago</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star size={16} className="text-white/30" />
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Great components overall. Would love to see more chart variations and better mobile responsiveness.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs">Components</span>
                <span className="px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs">Features</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white font-bold">Emma Williams</h4>
                  <p className="text-white/50 text-xs">2 weeks ago</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Perfect for our dashboard redesign. The liquid glass aesthetic is exactly what we were looking for!
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs">Beautiful</span>
                <span className="px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs">Modern</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard padding="lg">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-white font-bold">David Kim</h4>
                  <p className="text-white/50 text-xs">3 weeks ago</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star size={16} className="fill-yellow-400/50 text-yellow-400/50" />
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Good library with nice visual effects. Documentation could be more comprehensive for beginners.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-[var(--glass-bg-light)] text-white/70 text-xs">Documentation</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Feedback Form */}
      <div>
        <h3 className="text-white text-2xl font-bold mb-2">Submit Feedback</h3>
        <p className="text-white/60 text-sm mb-4">🖱️ Fill out the form and click submit</p>
        
        <GlassCard padding="lg">
          <div className="space-y-6">
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-[var(--glass-border)]
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-all duration-200
                "
              />
            </div>
            
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className="transition-all duration-200 hover:scale-125"
                  >
                    <Star size={32} className="text-white/30 hover:fill-yellow-400 hover:text-yellow-400" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Your Feedback</label>
              <textarea
                rows={4}
                placeholder="Tell us what you think..."
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-[var(--glass-border)]
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-all duration-200
                  resize-none
                "
              />
            </div>
            
            <GlassButton
              variant="primary"
              onClick={() => addToast('success', 'Thank you for your feedback!', { title: 'Feedback Submitted' })}
              className="w-full"
            >
              <Send size={18} className="mr-2" />
              Submit Feedback
            </GlassButton>
          </div>
        </GlassCard>
      </div>

      {/* Code Samples */}
      <CodeBlock
        title="Feedback & Rating Code Samples"
        code={sectionCodeSamples.feedbackSection}
      />
    </div>
  );
}