import { useState } from 'react';
import PropTypes from 'prop-types';

type Option = {
  text: string;
  nextNode: TreeNode;
};

type TreeNode = {
  question?: string;
  options?: Option[];
  result?: string;
};

const decisionTree: TreeNode = {
  question: "Qual é o seu nicho?",
  options: [
    {
      text: "Confirmar",
      nextNode: {
        question: "Você está muito engajado no seu nicho?",
        options: [
          {
            text: "Sim, estou muito engajado!",
            nextNode: {
              question: "Você já utiliza alguma estratégia de marketing para promover seu nicho?",
              options: [
                {
                  text: "Sim, utilizo diversas estratégias.",
                  nextNode: {
                    question: "Você já pensou em criar um blog para compartilhar conteúdo relacionado ao seu nicho?",
                    options: [
                      {
                        text: "Sim, já considerei essa ideia.",
                        nextNode: {
                          question: "E quanto às redes sociais, você tem uma presença ativa nelas?",
                          options: [
                            {
                              text: "Sim, estou ativo nas redes sociais.",
                              nextNode: {
                                question: "Você já participou de eventos ou workshops relacionados ao seu nicho?",
                                options: [
                                  {
                                    text: "Sim, já participei.",
                                    nextNode: {
                                      question: "Você já fez parcerias com outros profissionais do seu nicho?",
                                      options: [
                                        {
                                          text: "Sim, já fiz parcerias.",
                                          nextNode: {
                                            question: "Você já investiu em publicidade para promover seu nicho?",
                                            options: [
                                              {
                                                text: "Sim, já investi em publicidade.",
                                                nextNode: {
                                                  result: "Com base nas suas respostas, Dermastories pode ser uma ferramenta valiosa para aprimorar sua estratégia de marketing e alcançar melhores resultados no seu nicho!"
                                                }
                                              },
                                              {
                                                text: "Não, ainda não investi em publicidade.",
                                                nextNode: {
                                                  result: "Com base nas suas respostas, Dermastories pode ajudar você a explorar opções de publicidade para impulsionar seu nicho e alcançar um público mais amplo."
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          text: "Não, ainda não fiz parcerias.",
                                          nextNode: {
                                            result: "Com base nas suas respostas, Dermastories pode ser uma excelente maneira de encontrar parceiros e colaboradores para fortalecer sua presença no nicho!"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: "Não, nunca participei.",
                                    nextNode: {
                                      result: "Com base nas suas respostas, Dermastories pode ser uma ótima maneira de se conectar com outros profissionais do seu nicho e ampliar suas oportunidades de networking!"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: "Não, não sou ativo nas redes sociais.",
                              nextNode: {
                                result: "Com base nas suas respostas, Dermastories pode ser uma forma eficaz de começar a construir uma presença nas redes sociais e aumentar seu engajamento com o público!"
                              }
                            }
                          ]
                        }
                      },
                      {
                        text: "Não, nunca considerei essa ideia.",
                        nextNode: {
                          result: "Com base nas suas respostas, Dermastories pode ajudar você a explorar a criação de um blog como uma estratégia eficaz para compartilhar conteúdo e fortalecer sua presença no nicho!"
                        }
                      }
                    ]
                  }
                },
                {
                  text: "Não, ainda não explorei isso.",
                  nextNode: {
                    result: "Com base nas suas respostas, Dermastories pode ajudar você a explorar novas estratégias de marketing para impulsionar seu nicho e alcançar resultados incríveis!"
                  }
                }
              ]
            }
          },
          {
            text: "Não estou tão engajado.",
            nextNode: {
              question: "Gostaria de aprimorar a sua presença no seu nicho?",
              options: [
                {
                  text: "Sim, quero melhorar.",
                  nextNode: {
                    question: "Você já considerou participar de eventos ou workshops relacionados ao seu nicho?",
                    options: [
                      {
                        text: "Sim, já pensei nisso.",
                        nextNode: {
                          question: "E quanto às redes sociais, você tem uma presença ativa nelas?",
                          options: [
                            {
                              text: "Sim, estou ativo nas redes sociais.",
                              nextNode: {
                                question: "Você já fez parcerias com outros profissionais do seu nicho?",
                                options: [
                                  {
                                    text: "Sim, já fiz parcerias.",
                                    nextNode: {
                                      question: "Você já investiu em publicidade para promover seu nicho?",
                                      options: [
                                        {
                                          text: "Sim, já investi em publicidade.",
                                          nextNode: {
                                            result: "Com base nas suas respostas, Dermastories pode ser uma ferramenta valiosa para aprimorar sua estratégia de marketing e alcançar melhores resultados no seu nicho!"
                                          }
                                        },
                                        {
                                          text: "Não, ainda não investi em publicidade.",
                                          nextNode: {
                                            result: "Com base nas suas respostas, Dermastories pode ajudar você a explorar opções de publicidade para impulsionar seu nicho e alcançar um público mais amplo."
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: "Não, ainda não fiz parcerias.",
                                    nextNode: {
                                      result: "Com base nas suas respostas, Dermastories pode ser uma excelente maneira de encontrar parceiros e colaboradores para fortalecer sua presença no nicho!"
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: "Não, não sou ativo nas redes sociais.",
                              nextNode: {
                                result: "Com base nas suas respostas, Dermastories pode ser uma forma eficaz de começar a construir uma presença nas redes sociais e aumentar seu engajamento com o público!"
                              }
                            }
                          ]
                        }
                      },
                      {
                        text: "Não, nunca considerei isso.",
                        nextNode: {
                          result: "Com base nas suas respostas, Dermastories pode ajudar você a explorar oportunidades de networking através da participação em eventos e workshops relacionados ao seu nicho!"
                        }
                      }
                    ]
                  }
                },
                {
                  text: "Não, estou bem como estou.",
                  nextNode: {
                    result: "Lembre-se de que, mesmo que você esteja bem agora, Dermastories sempre pode ser útil no futuro. Pense nisso!"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

function App({ initialNode, userNiche: initialUserNiche }: { initialNode?: TreeNode, userNiche: string }) {
  const [currentNode, setCurrentNode] = useState<TreeNode | undefined>(initialNode || decisionTree);
  const [userNiche, setUserNiche] = useState<string>(initialUserNiche);

  const handleOptionClick = (nextNode: TreeNode) => {
    setCurrentNode(nextNode);
  };

  const handleInputSubmit = () => {
    if (userNiche.trim() !== "") {
      setCurrentNode(decisionTree.options![0].nextNode);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dermastories!</h1>
        {currentNode?.question ? (
          <>
            <p className="mb-4">{currentNode.question}</p>
            {currentNode === decisionTree ? (
              <>
                <input
                  type="text"
                  value={userNiche}
                  onChange={(e) => setUserNiche(e.target.value)}
                  className="border rounded-lg p-2 w-full mb-4"
                />
                <button onClick={handleInputSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Confirmar
                </button>
              </>
            ) : currentNode.options ? (
              <div className="flex flex-col space-y-2">
                {currentNode.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option.nextNode)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
        {currentNode?.result ? (
          <p className="mt-4">{currentNode.result.replace(/{name}/g, userNiche)}</p>
        ) : null}
      </div>
    </div>
  );
}

App.propTypes = {
  initialNode: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        nextNode: PropTypes.object.isRequired
      })
    ),
    result: PropTypes.string,
  }),
  userNiche: PropTypes.string.isRequired,
};

export default App;
