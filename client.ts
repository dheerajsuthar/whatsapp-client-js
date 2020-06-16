import {config, connectTo, of} from 'node-ipc'
import {prompt} from 'readline-sync'

config.id = 'a-unique-process-name2';
config.retry = 1500;
config.silent = true;

const sendMessage = (message: string)=>{
    connectTo('server', () => {
        of['server'].on('connect', () => {
            of['server'].emit('chat', message);
            console.log('message sent')
        });
    });
}

sendMessage('test 123')
