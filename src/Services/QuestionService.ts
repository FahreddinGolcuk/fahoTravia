interface QuestionService {
  todo?: string;
  id?: string;
}

const QuestionService = {
  fetchNewQuestions: async (difficult: string, category: string) => {
    const list = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficult}&type=multiple`,
    );
    return list.json();
  },
};

export default QuestionService;
