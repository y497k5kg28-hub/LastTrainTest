const gameData = {
  title: "Спаси арвандосскую империю",
  scenes: [
    {
      id: 1,
      description: "Вы находитесь в красивом королевстве, но темные тучи надвигаются над ним.",
      choices: [
        { text: "Поговорить с местными жителями", nextSceneId: 2 },
        { text: "Идти в лес", nextSceneId: 3 }
      ]
    },
    {
      id: 2,
      description: "Местные жители рассказывают о злых силах, угрожающих империи.",
      choices: [
        { text: "Собрать команду", nextSceneId: 4 },
        { text: "Исследовать замок", nextSceneId: 5 }
      ]
    },
    // ... добавьте более 100 сцен и их описания
  ],
  npcs: [
    { name: "Мудрый старец", role: "Советник", dialogue: "Вы должны спасать империю от темной силы." },
    { name: "Воин", role: "Боец", dialogue: "Я готов помочь тебе в битве." }
  ],
  enemies: [
    { name: "Темный маг", strength: 50, description: "Следит за империей из теней." },
    { name: "Злой дракон", strength: 100, description: "Дышит огнем и страхом." }
  ],
  items: [
    { name: "Меч света", type: "оружие", power: 20 },
    { name: "Зелье здоровья", type: "предмет", heal: 50 }
  ],
  inventory: [],
  endingBranches: [
    { condition: "Все враги побеждены", ending: "Империя спасена!" },
    { condition: "Темный маг сбегает", ending: "Зло все еще живо..." }
  ],
};

export default gameData;