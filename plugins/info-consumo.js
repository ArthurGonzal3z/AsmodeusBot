import cp from 'child_process';
import { promisify } from 'util';
let exec = promisify(cp.exec).bind(cp);
let handler = async (m) => {
        await conn.reply(m.chat, "𝘝𝘦𝘳𝘪𝘧𝘪𝘤𝘢𝘯𝘥𝘰...", m);
        let o;
        try {
            o = await exec('vpspackconsumo');
            console.log(o);
        } catch (e) {
            o = e;
        } finally {
            let { stdout, stderr } = o;
            if (stdout.trim()) m.reply(stdout);
            if (stderr.trim()) m.reply(stderr);
        }
};

handler.help = ['consumo'];
handler.command = /^(consumo)$/i;
handler.group = true;
export default handler;