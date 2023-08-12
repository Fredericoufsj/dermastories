// Importe PropTypes do pacote 'prop-types'
import PropTypes from 'prop-types';
import React, { useState } from 'react';


// Defina os tipos corretamente
type TreeNode = {
  question?: string;
  yes?: TreeNode; // Opcional
  no?: TreeNode; // Opcional
  result?: string; // Opcional
};

const decisionTree: TreeNode = {
  question: "Qual é o seu nicho?",
  yes: {
    question: "Você está muito engajado no seu nicho?",
    yes: {
      question: "Você já utiliza alguma estratégia de marketing para promover seu nicho?",
      yes: { result: "Incrível! Dermastories pode ajudar você a alcançar seus objetivos no seu nicho." },
      no: { result: "Dermastories pode ajudar a aumentar o seu engajamento no seu nicho. Experimente!" }
    },
    no: {
      question: "O que você acredita que poderia fazer para se tornar mais engajado no seu nicho?",
      yes: { result: "Incrível! Dermastories pode ajudar você a alcançar seus objetivos no seu nicho." },
      no: { result: "Dermastories pode ajudar a aumentar o seu engajamento no seu nicho. Experimente!" }
    }
  },
  no: {
    question: "Gostaria de aprimorar a sua presença no seu nicho?",
    yes: {
      question: "Quais aspectos você gostaria de aprimorar na sua presença no nicho?",
      yes: { result: "Dermastories é a ferramenta certa para você alavancar sua presença no seu nicho." },
    no: { result: "Mesmo que você não esteja buscando aprimorar agora, Dermastories pode ser útil no futuro. Pense nisso!" }
    },
    no: {
      question: "Você já considerou como uma presença forte no nicho pode beneficiar o seu negócio?",
      yes: { result: "Dermastories é a ferramenta certa para você alavancar sua presença no seu nicho." },
    no: { result: "Mesmo que você não esteja buscando aprimorar agora, Dermastories pode ser útil no futuro. Pense nisso!" }
    }
  },
  result: ""
};


function App() {
  const [currentNode, setCurrentNode] = useState<TreeNode>(decisionTree);
  const [userNiche, setUserNiche] = useState<string>("");

  const handleContinueClick = () => {
    if (currentNode.yes && currentNode.no) {
      setCurrentNode(userNiche ? currentNode.yes : currentNode.no);
    }
  };

  const handleYesClick = () => {
    if (currentNode.yes) {
      setCurrentNode(currentNode.yes);
    }
  };

  const handleNoClick = () => {
    if (currentNode.no) {
      setCurrentNode(currentNode.no);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dermastories!</h1>
        {currentNode.question ? (
          <>
            <p className="mb-4">{currentNode.question}</p>
            {currentNode === decisionTree ? ( // Mostra apenas na primeira tela
              <>
                <input
                  type="text"
                  value={userNiche}
                  onChange={(e) => setUserNiche(e.target.value)}
                  className="border rounded-lg p-2 w-full mb-4"
                />
                <button onClick={handleContinueClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Continuar
                </button>
              </>
            ) : (
              <>
                <div className="flex space-x-4">
                  <button onClick={handleYesClick} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Sim
                  </button>
                  <button onClick={handleNoClick} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Não
                  </button>
                </div>
              </>
            )}
          </>
        ) : null}
        {currentNode.result ? (
          <p className="mt-4">{currentNode.result.replace(/{name}/g, userNiche)}</p>
        ) : null}
      </div>
    </div>
  );
}


// Defina os tipos de PropTypes corretamente
App.propTypes = {
  currentNode: PropTypes.shape({
    question: PropTypes.string.isRequired,
    yes: PropTypes.object,
    no: PropTypes.object,
    result: PropTypes.string,
  }).isRequired,
  userNiche: PropTypes.string.isRequired,
  handleYesClick: PropTypes.func.isRequired,
  handleNoClick: PropTypes.func.isRequired,
};

export default App;
