const IdeaCard = ({ idea, onUpvote }) => {
  const { id, title, description, upvotes } = idea;


  const glassClasses = "bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm shadow-sm transition-all hover:bg-white/20 p-6 flex flex-col justify-between h-full";

  return (
    <div className={glassClasses}>
      <div>
        <h3 className="text-xl font-bold text-white mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 h-20 overflow-y-auto">{description}</p>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-white/20">
        <span className="text-sm font-extrabold text-blue-300 transition-all duration-300">
          {upvotes} Votes
        </span>
        <button
          onClick={() => onUpvote(id)}
          className="flex items-center space-x-2 px-4 py-1 bg-blue-600/80 hover:bg-blue-500 transition-colors rounded-sm text-white font-semibold shadow-lg shadow-blue-500/50 transform hover:scale-105 active:scale-95"
          aria-label={`Upvote ${title}`}
        >
          {/* <ThumbsUp className="w-5 h-5" /> */}
          <span>Upvote</span>
        </button>
      </div>
    </div>
  );
};

export default IdeaCard;