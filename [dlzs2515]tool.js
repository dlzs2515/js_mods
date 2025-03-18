
class AlertExt {
    getInfo() {
        return {
            id: 'AlertExt',
            name: 'dlzs2515工具',
            blocks: [
                "---",
                {
                    opcode: 'showAlert',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '显示提示窗口 [MESSAGE]',
                    arguments: {
                        MESSAGE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '这是一个提示窗口'
                        }
                    }
                },
                {
                    opcode: 'showConfirm',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '显示确认窗口 [MESSAGE]',
                    arguments: {
                        MESSAGE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '你确定吗？'
                        }
                    }
                },
                {
                    opcode: 'showPrompt',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '显示输入窗口 [MESSAGE] [DEFAULT]',
                    arguments: {
                        MESSAGE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '请输入内容'
                        },
                        DEFAULT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        }
                    }
                },
                "---",
                {
                    opcode: 'OpenExample',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '打开链接 [example]',
                    arguments: {
                        example: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://www.example.com'
                        }
                    }
                },
                "---",
                "---",
                "---",
                "---",
                "---",
                "---",
                {
                    opcode: 'RUN_JS_',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '执行JS: [code]',
                    arguments: {
                        code: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'window.open(\"trubowarp.org\");'
                        }
                    }
                },
                {
                    opcode: 'RUN_JS_CODE_',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '执行JS: [code]',
                    arguments: {
                        code: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1+1'
                        }
                    }
                },
                {
                    opcode: 'JS_ERROR',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'JS: [code] 的错误',
                    arguments: {
                        code: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'window.open(trubowarp.org);'
                        }
                    }
                },
                "---",
                {
                    opcode: 'write_data',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '将类名为[value_class]变量名为[value_name] 设为 [value]',
                    arguments: {
                        value_class: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '项目标题'
                        },
                        value_name : {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '玩家分数'
                        },
                        value : {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '100'
                        }
                    }
                },
                {
                    opcode: 'del_data',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '将类名为[value_class]变量名为[value_name] 清除',
                    arguments: {
                        value_class: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '项目标题'
                        },
                        value_name : {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '玩家分数'
                        }
                    }
                },
                {
                    opcode: 'read_data',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '读取类名为[value_class]变量名为[value_name]',
                    arguments: {
                        value_class: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '项目标题'
                        },
                        value_name : {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '玩家分数'
                        }
                    }
                },
                {
                    opcode: 'have_this_data',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '类名为[value_class]变量名为[value_name]是否存在?',
                    arguments: {
                        value_class: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '项目标题'
                        },
                        value_name : {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '玩家血量'
                        }
                    }
                },
                {
                    opcode: 'clear_data',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '清除所有存储的数据',
                    arguments: {
                    }
                },
                {
                    opcode: 'run_html_code',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '执行HTML代码: [code]',
                    arguments: {
                        code: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '<input type="text" id="username" placeholder="用户名">'
                        }
                    }
                },
                {
                    opcode: 'get_url',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '当前url',
                    arguments: {
                    }
                },
            ]
        };
    }
    showAlert(args) {
        alert(args.MESSAGE);
    }

    showConfirm(args) {
        return confirm(args.MESSAGE);
    }

    showPrompt(args) {
        return prompt(args.MESSAGE, args.DEFAULT);
    }

    

    
    

    OpenExample(args) {
        window.open(args.example);
    }
    RUN_JS_(args) {
        eval(args.code);
        
    }
    RUN_JS_CODE_(args)
    {
        return eval(args.code);
    }
    JS_ERROR(args) {
        try
        {
            eval(args.code);
            return "无错误";
        }
        catch(e){
            return e;
        }
            
    }
    
    write_data(args) {
        if (args.value_class&&args.value_name&&args.value)
        {
            localStorage.setItem(`${args.value_class}.${args.value_name}`, `${args.value}`);
        }
        
    }
    del_data(args) {
        if (args.value_class&&args.value_name)
        {
            localStorage.removeItem(`${args.value_class}.${args.value_name}`);
        }
        
    }
    read_data(args) {
        if (args.value_class&&args.value_name)
        {
            return localStorage.getItem(`${args.value_class}.${args.value_name}`);
        }
        else 
        {
            return "";
        }
    }
    have_this_data(args) {
        if (`${args.value_class}.${args.value_name}`)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    clear_data(args) {
        localStorage.clear();
    }
    run_html_code(args) {
        document.write(unescape(args.code))
    }
    get_url(args)
    {
        return window.location.search;
    }
}

Scratch.extensions.register(new AlertExt());
