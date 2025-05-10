const commands = {
    general: [
        { name: "!ping", description: "Проверяет работоспособность бота", usage: "!ping", permissions: "all" },
        { name: "!gn", description: "Пожелание спокойной ночи", usage: "!gn", permissions: "all" },
        { name: "!afk", description: "Уведомляет о том, что вы отошли", usage: "!afk", permissions: "all" },
        { name: "!shuffle", description: "Перемешивает список слов", usage: "!shuffle <слова>", permissions: "all" },
        { name: "!delivery", description: "Имитирует доставку", usage: "!delivery <кому> <что>", permissions: "all" },
        { name: "!work", description: "Имитирует работу", usage: "!work", permissions: "all" },
        { name: "!tuck", description: "Укладывает на сон", usage: "!tuck <кого>", permissions: "all" }
    ],
    admin: [
        { name: "!a", description: "Административная команда", usage: "!a <команда>", permissions: "owner", subcommands: [
            { name: "echo", description: "Установить пользователя для эхо-режима", usage: "!a echo <username>", permissions: "owner" },
            { name: "stop", description: "Остановить эхо-режим", usage: "!a stop", permissions: "owner" },
            { name: "add_channel", description: "Добавить канал для бота", usage: "!a add_channel <channel>", permissions: "owner" },
            { name: "reload", description: "Перезагрузить эмote-сет", usage: "!a reload", permissions: "owner" },
            { name: "load_module", description: "Загрузить модуль", usage: "!a load_module <module>", permissions: "owner" },
            { name: "unload_module", description: "Выгрузить модуль", usage: "!a unload_module <module>", permissions: "owner" },
            { name: "reload_module", description: "Перезагрузить модуль", usage: "!a reload_module <module>", permissions: "owner" },
            { name: "ignore", description: "Игнорировать пользователя", usage: "!a ignore <username>", permissions: "owner" },
            { name: "unignore", description: "Перестать игнорировать пользователя", usage: "!a unignore <username>", permissions: "owner" },
            { name: "ignore_list", description: "Показать список игнорируемых", usage: "!a ignore_list", permissions: "owner" },
            { name: "disable", description: "Отключить бота на канале", usage: "!a disable <channel>", permissions: "owner" },
            { name: "enable", description: "Включить бота на канале", usage: "!a enable <channel>", permissions: "owner" }
        ] }
    ],
    cats: [
        { name: "!cat", description: "Управление виртуальным котом", usage: "!cat <команда>", permissions: "all", subcommands: [
            { name: "adopt", description: "Усыновить кота", usage: "!cat adopt [имя]" },
            { name: "rename", description: "Переименовать кота", usage: "!cat rename <новое имя>" },
            { name: "feed", description: "Покормить кота", usage: "!cat feed" },
            { name: "soup", description: "Приготовить суп для кота", usage: "!cat soup" },
            { name: "info", description: "Показать информацию о коте", usage: "!cat info" },
            { name: "shop", description: "Открыть магазин для кота", usage: "!cat shop" },
            { name: "sell", description: "Продать предмет", usage: "!cat sell <предмет>" },
            { name: "sell_all", description: "Продать все предметы", usage: "!cat sell_all" },
            { name: "meet", description: "Познакомиться с другим котом", usage: "!cat meet <ник>" },
            { name: "pet", description: "Погладить кота", usage: "!cat pet" }
        ] },
        { name: "!cot", description: "Алиас для !cat", usage: "!cot", permissions: "all" },
        { name: "!koshka", description: "Алиас для !cat", usage: "!koshka", permissions: "all" }
    ],
    city: [
        { name: "!city", description: "Игра в города", usage: "!city <команда>", permissions: "all", subcommands: [
            { name: "create", description: "Создать новую игру", usage: "!city create" },
            { name: "join", description: "Присоединиться к игре", usage: "!city join" },
            { name: "play", description: "Сделать ход", usage: "!city play <город>" },
            { name: "leave", description: "Покинуть игру", usage: "!city leave" },
            { name: "end", description: "Завершить игру", usage: "!city end" },
            { name: "info", description: "Показать информацию об игре", usage: "!city info" },
            { name: "ban", description: "Забанить игрока (только владелец бота)", usage: "!city ban <ник>", permissions: "bot_owner" },
            { name: "kick", description: "Исключить игрока", usage: "!city kick <ник>", permissions: "moderator" }
        ] }
    ],
    mafia: [
        { name: "!mafia", description: "Начинает игру в мафию", usage: "!mafia", permissions: "all" },
        { name: "!kill", description: "Убивает игрока (мафия)", usage: "!kill <кого>", permissions: "mafia" },
        { name: "!check", description: "Проверяет игрока (шериф)", usage: "!check <кого>", permissions: "sheriff" },
        { name: "!heal", description: "Лечит игрока (доктор)", usage: "!heal <кого>", permissions: "doctor" },
        { name: "!vote", description: "Голосует за игрока", usage: "!vote <кого>", permissions: "all" }
    ],
    emote: [
        { name: "!etop", description: "Показывает топ-5 эмоутов канала", usage: "!etop", permissions: "all" },
        { name: "!estat", description: "Показывает статистику использования эмоута", usage: "!estat <эмоут>", permissions: "all" }
    ],
    holiday: [
        { name: "!holiday", description: "Проверяет текущий праздник", usage: "!holiday", permissions: "all" }
    ],
    weather: [
        { name: "!weather", description: "Показывает погоду", usage: "!weather <город>", permissions: "all" }
    ],
    ai: [
        { name: "!ai", description: "Использует AI для ответа", usage: "!ai <вопрос>", permissions: "all" },
        { name: "!trigger", description: "Устанавливает триггер для AI", usage: "!trigger <слово>", permissions: "all" }
    ],
    alias: [
        { name: "!alias", description: "Управление алиасами", usage: "!alias <команда>", permissions: "all", subcommands: [
            { name: "add", description: "Добавить алиас", usage: "!alias add <старая команда> <новая команда>", permissions: "owner" },
            { name: "remove", description: "Удалить алиас", usage: "!alias remove <алиас>", permissions: "owner" },
            { name: "list", description: "Показать список всех алиасов", usage: "!alias list", permissions: "owner" },
            { name: "link", description: "Связать алиас с командой", usage: "!alias link <алиас> <команда>", permissions: "owner" }
        ] }
    ],
    set: [
        { name: "!set", description: "Настройка профиля", usage: "!set <параметр>", permissions: "all", subcommands: [
            { name: "unmention", description: "Отключить упоминание автора команды", usage: "!set unmention" },
            { name: "country", description: "Установить страну", usage: "!set country <код страны>" },
            { name: "location", description: "Установить локацию", usage: "!set location <локация>" },
            { name: "opt_in", description: "Разрешить/запретить сбор данных", usage: "!set opt_in <0/1>" }
        ] }
    ]
};

// Function to create command cards
function createCommandCard(command) {
    let html = `
        <div class="command-card">
            <div class="command-name">${command.name}</div>
            <div class="command-description">${command.description}</div>
            <div class="command-usage">${command.usage}</div>
            ${command.permissions !== "all" ? 
                `<div class="command-perms">Требуются права: ${command.permissions}</div>` : 
                ''
            }
            ${command.subcommands ? `
                <div class="subcommands">
                    <h4>Подкоманды:</h4>
                    ${command.subcommands.map(subcmd => `
                        <div class="subcommand">
                            <div class="subcommand-name">${subcmd.name}</div>
                            <div class="subcommand-description">${subcmd.description}</div>
                            <div class="subcommand-usage">${subcmd.usage}</div>
                            ${subcmd.permissions !== "all" ? 
                                `<div class="subcommand-perms">Требуются права: ${subcmd.permissions}</div>` : 
                                ''
                            }
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    return html;
}

// Function to filter commands
function filterCommands(searchTerm) {
    const filteredCommands = [];
    Object.values(commands).forEach(category => {
        category.forEach(cmd => {
            if (cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                cmd.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                filteredCommands.push(cmd);
            }
        });
    });
    return filteredCommands;
}

// Initialize commands display
function initializeCommands() {
    const container = document.getElementById('commands-container');
    if (!container) return;
    
    let html = '';
    
    // Add commands from each category
    Object.entries(commands).forEach(([category, cmds]) => {
        html += `<h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
        cmds.forEach(cmd => {
            html += createCommandCard(cmd);
        });
    });
    
    container.innerHTML = html;
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    const filtered = filterCommands(searchTerm);
    const container = document.getElementById('commands-container');
    
    if (!container) return;
    
    if (searchTerm === '') {
        initializeCommands();
        return;
    }
    
    container.innerHTML = filtered.map(cmd => createCommandCard(cmd)).join('');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeCommands();
});