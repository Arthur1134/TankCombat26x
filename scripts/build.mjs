import { cpSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
if (existsSync(dist)) rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, 'index.html'), join(dist, 'index.html'));
cpSync(join(root, 'version.json'), join(dist, 'version.json'));
const thumb = join(root, 'public', 'thumbnail.jpg');
if (existsSync(thumb)) {
  mkdirSync(join(dist, 'public'), { recursive: true });
  cpSync(thumb, join(dist, 'public', 'thumbnail.jpg'));
  // some hosts look at build root
  cpSync(thumb, join(dist, 'thumbnail.jpg'));
}
console.log('Built dist/ for RUN.world (index.html + version.json + thumbnail)');
