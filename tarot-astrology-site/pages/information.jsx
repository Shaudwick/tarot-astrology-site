import { BookOpen, Sparkles, Star, Moon, Sun, Heart, Shield, Zap, Wand2 } from 'lucide-react';

export default function Information() {
  const majorArcana = [
    { name: 'The Fool', meaning: 'New beginnings, innocence, spontaneity', icon: Sparkles },
    { name: 'The Magician', meaning: 'Manifestation, resourcefulness, power', icon: Wand2 },
    { name: 'The High Priestess', meaning: 'Intuition, sacred knowledge, divine feminine', icon: Moon },
    { name: 'The Empress', meaning: 'Femininity, beauty, nature, abundance', icon: Heart },
    { name: 'The Emperor', meaning: 'Authority, establishment, structure, fatherhood', icon: Shield },
    { name: 'The Hierophant', meaning: 'Spiritual wisdom, religious beliefs, conformity', icon: BookOpen },
    { name: 'The Lovers', meaning: 'Love, harmony, relationships, values alignment', icon: Heart },
    { name: 'The Chariot', meaning: 'Control, willpower, success, action', icon: Zap },
    { name: 'Strength', meaning: 'Strength, courage, persuasion, influence', icon: Star },
    { name: 'The Hermit', meaning: 'Soul searching, introspection, being alone, inner guidance', icon: Moon },
  ];

  const suits = [
    {
      name: 'Cups',
      element: 'Water',
      meaning: 'Emotions, feelings, relationships, intuition',
      color: 'blue',
      icon: '💧',
    },
    {
      name: 'Wands',
      element: 'Fire',
      meaning: 'Creativity, passion, inspiration, action',
      color: 'orange',
      icon: '🔥',
    },
    {
      name: 'Swords',
      element: 'Air',
      meaning: 'Thoughts, communication, conflict, truth',
      color: 'gray',
      icon: '⚔️',
    },
    {
      name: 'Pentacles',
      element: 'Earth',
      meaning: 'Material world, money, career, physical health',
      color: 'green',
      icon: '💰',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 via-purple-950 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
              <BookOpen className="text-purple-300" size={20} />
              <span className="text-purple-200 text-sm font-medium">Ancient Wisdom</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            The Art of Tarot
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the rich history, symbolism, and meaning behind the tarot cards that guide your spiritual journey.
          </p>
        </div>
      </section>

      {/* What is Tarot Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-4xl font-bold mb-6 text-purple-200">What is Tarot?</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Tarot is an ancient divination tool that uses a deck of 78 cards to provide insight, guidance, and reflection. 
                Each card carries its own unique symbolism and meaning, drawn from centuries of spiritual tradition and wisdom.
              </p>
              <p>
                The tarot deck consists of two main parts: the Major Arcana (22 cards representing life's spiritual lessons) 
                and the Minor Arcana (56 cards representing day-to-day experiences). Together, they create a comprehensive 
                map of the human experience, offering clarity on past, present, and potential future events.
              </p>
              <p>
                Tarot readings are not about predicting a fixed future, but rather about understanding the energies and 
                patterns at play in your life. The cards serve as a mirror, reflecting your inner wisdom and helping you 
                make informed decisions aligned with your highest good.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Arcana Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            The Major Arcana
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            The 22 cards of the Major Arcana represent significant life events and spiritual lessons. These are the archetypal 
            forces that shape our journey through life.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorArcana.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-purple-200">{card.name}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{card.meaning}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minor Arcana Suits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            The Minor Arcana Suits
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            The 56 cards of the Minor Arcana are divided into four suits, each representing different aspects of life and 
            connected to one of the four classical elements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {suits.map((suit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-5xl">{suit.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-200">{suit.name}</h3>
                    <p className="text-gray-400">Element: {suit.element}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{suit.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Readings Work Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6 text-indigo-200">How Tarot Readings Work</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Setting Your Intention</h3>
                  <p>
                    Before a reading, you'll focus on a question or area of your life where you seek guidance. This intention 
                    helps the cards align with your energy and provide relevant insights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">The Card Spread</h3>
                  <p>
                    Cards are drawn and arranged in a specific pattern called a spread. Each position in the spread represents 
                    a different aspect of your question—past influences, present circumstances, future possibilities, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Interpretation & Guidance</h3>
                  <p>
                    The reader interprets the cards' meanings in relation to your question, weaving together the symbolism, 
                    numerology, and intuitive insights to provide you with clarity and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Your Lovely Astrologist • Mystical Guidance Through Tarot</p>
        </div>
      </footer>
    </div>
  );
}

