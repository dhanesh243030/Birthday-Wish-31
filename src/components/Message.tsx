import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Today is not just your birthday, it feels like my own special day too, because a person so close to
           my heart came into this world on this date.
          Sometimes I don’t even need to say much, you already understand me — and that’s the most precious 
          part of our bond.
          Your smile has a magic jo meri duniya ko aur bhi khubsurat bana deta hai.
         “Tere bina zindagi adhoori si lagti hai,
         Teri hansi mein hi meri rooh jeeti hai.” ✨
         I don’t know if I can ever express everything, but I just want you to always stay this happy and glowing.
        🌸🎂 Happy Birthday to you, my dearest friend… maybe more than just a friend for me. 💫
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you the happiest birthday
        </p>
      </motion.div>
    </div>
  );
};

export default Message;