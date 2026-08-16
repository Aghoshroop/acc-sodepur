'use client';

import { motion } from 'framer-motion';

const PERFORMANCES_DATA = [
  {
    era: "1969 - 1979",
    athletes: [
      "1. Pallab Sur", "2. Samir Paul", "3. Kamalesh Sarkar", "4. Subhraja Ghosal (Roy)",
      "5. Sujit Dutta", "6. Robin Soren", "7. Anup Bose", "8. Manab Chatterjee",
      "9. Sujit Deb", "10. Snigdha Mallick", "11. Atindra Majumder", "12. Somnath Roy",
      "13. Subrata Paul", "14. Subir Majumder"
    ]
  },
  {
    era: "1980 - 1999",
    athletes: [
      "1. Subhraja Ghosal (Roy)", "2. Sipra Nandy", "3. Robin Soren", "4. Snigdha Mallick",
      "5. Subhasish Dutta", "6. Samir Pal", "7. Krishna Seth", "8. Subrata Pal",
      "9. Kamlesh Sarkar", "10. Manab Chatterjee", "11. Arabinda Dey", "12. Rina Saha",
      "13. Rajat Subhra Nag", "14. Atindra Majumder", "15. Ashok Sarkar", "16. Sipra Das",
      "17. Reba Sutradhar", "18. Ajit Murmu", "19. Subir Dey", "20. Nirmala Karmakar",
      "21. Amal Das", "22. Susmita Ghosh", "23. Nisit Dey", "24. Manasi Ghosh",
      "25. Anita Ray Nandi", "26. Sankar Dutta", "27. Rupa Bhowmick", "28. Ranjan Dutta",
      "29. Ranen Sarkar", "30. Satpati Pal", "31. Mrinal Roy", "32. Tanuja Das",
      "33. Biswajit Dutta", "34. Suvendu Bose", "35. Anup Bose", "36. Tapan Dhar",
      "37. Firoja Jigiboy", "38. Sujit Dutta", "39. Sujata Bakshi", "40. Pravas Sarkar",
      "41. Manabendra Roy"
    ]
  },
  {
    era: "2000 - 2020",
    athletes: [
      "1. Pranab Sarkar", "2. Golok Mondal", "3. Babli Mitra", "4. P. Bindu",
      "5. Dhananjay Rai", "6. Rudra Pratim Roy", "7. Chinmoy Basak", "8. Sunny Saha",
      "9. Trisha Dhar", "10. Shouvik Ghosh", "11. Shouvik Mondal", "12. Supa Parvin",
      "13. Titir Hore", "14. Bandana Tiwari", "15. Minaj Mondal", "16. Md. Shakil",
      "17. Arnab Sarkar", "18. Debanjana Dey", "19. Ujala Kumari Singh", "20. Arghadeep Chowdhury",
      "21. Utsav Chakraborty", "22. Sayan Karmakar", "23. Raj Barua", "24. Shreya Das",
      "25. Atreyee Sarkar", "26. Prity Chakraborty", "27. Ananya Rajbanshi", "28. Tanusree Chakarborty",
      "29. Ankita Dutta"
    ]
  },
  {
    era: "2021 - Present",
    athletes: [
      "1. Bidisha Kundu", "2. Shikhar Rai",
      "3. Aviroop Ghosh", "4. Sayan Karmakar",
      "5. Nupur Pandey", "6. Tannistha Shee",
      "7. Ujala Kumari Singh", "8. Debanjana Dey",
      "9. Priti Chakraborty", "10. Hirak Sen",
      "11. Dipti Rajbanshi", "12. Rajdip Pal",
      "13. Satayu Mondal", "14. Tiyasha Chakraborty",
      "15. Priyanka Saha", "16. Genia Mondal",
      "17. Aishanya Priyadarshi", "18. Dibya Sen",
      "19. Srabani Mondal", "20. Banhi Das",
      "21. Shreya Das", "22. Avra Biswas",
      "23. Sayan Biswas", "24. Tarun Bauri",
      "25. Meghadri Saha", "26. Subham Paul",
      "27. Sreeja Das Karmakar", "28. Sisant Das",
      "29. Rai Mondal", "30. Aman Dey",
      "31. Anusha Gayen"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function AllPerformances() {
  return (
    <section className="w-full bg-chalk-white text-carbon-black py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="w-[150vw] h-[150vh] bg-[url('/images/logo.png')] bg-contain bg-center bg-no-repeat rotate-12 scale-[1.5]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 border-b-2 border-carbon-black/20 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight text-carbon-black mb-4">
              All <span className="text-track-red">Performances</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-carbon-black/70 uppercase tracking-widest">
              To Date, ACC Athletes Have Competed in Various National Championships, Showcasing Excellence At The Highest Level.
            </p>
          </div>
        </div>

        {/* Masonry-like Grid for Eras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {PERFORMANCES_DATA.map((eraBlock, index) => (
            <motion.div
              key={eraBlock.era}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              <motion.div variants={itemVariants} className="border-b-[3px] border-track-red pb-2 mb-4">
                <h3 className="text-2xl md:text-3xl font-primary tracking-wide uppercase text-carbon-black">
                  {eraBlock.era}
                </h3>
              </motion.div>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-2 gap-y-2 font-medium text-xs sm:text-sm md:text-base text-carbon-black/80">
                {eraBlock.athletes.map((athlete) => {
                  const numMatch = athlete.match(/^(\d+)\.\s*(.*)/);
                  const rank = numMatch ? numMatch[1] : '';
                  const restOfText = numMatch ? numMatch[2] : athlete;
                  
                  const hasAchievement = restOfText.includes(' - ');
                  const name = hasAchievement ? restOfText.split(' - ')[0] : restOfText;
                  const achievement = hasAchievement ? restOfText.split(' - ')[1] : '';

                  return (
                    <motion.li 
                      key={athlete} 
                      variants={itemVariants}
                      className="group hover:bg-carbon-black/5 p-2 -mx-2 rounded-lg transition-all duration-300 cursor-default flex items-start gap-3"
                    >
                      {/* Rank Badge */}
                      {rank && (
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-carbon-black/10 group-hover:bg-track-red group-hover:text-white text-carbon-black/60 text-xs font-bold rounded transition-colors duration-300 mt-0.5">
                          {rank}
                        </span>
                      )}
                      
                      {/* Name & Achievement */}
                      <div className="flex flex-col flex-1">
                        <span className="group-hover:text-track-red transition-colors duration-300 font-semibold text-carbon-black">
                          {name}
                        </span>
                        {hasAchievement && (
                          <span className="inline-block mt-1.5 w-fit bg-track-red/10 text-track-red border border-track-red/20 font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm group-hover:bg-track-red group-hover:text-white transition-colors duration-300">
                            {achievement}
                          </span>
                        )}
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
