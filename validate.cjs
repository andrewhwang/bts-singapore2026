const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const context={window:{}};vm.createContext(context);vm.runInContext(fs.readFileSync('data.js','utf8'),context);
const {events,venues,areas,categories,sources}=context.window.BTS_GUIDE;
assert.equal(new Set(events.map(e=>e.id)).size,events.length,'Duplicate event IDs');
const date=/^20\d\d-\d\d-\d\d$/;
for(const e of events){
 assert(venues[e.venue]&&categories[e.category]&&sources[e.source],e.id+' missing reference');
 assert(date.test(e.start)&&date.test(e.end)&&e.start<=e.end,e.id+' invalid range');
 for(const key of ['title','time','description'])assert(e[key].length===2&&e[key].every(x=>typeof x==='string'&&x.length),e.id+' missing translation');
 if(e.dates){assert.equal(new Set(e.dates).size,e.dates.length);e.dates.forEach(d=>assert(date.test(d)&&d>=e.start&&d<=e.end));}
}
for(const v of Object.values(venues)){assert(areas[v[4]]);assert(v[2]>1.2&&v[2]<1.5&&v[3]>103.6&&v[3]<104.1);}
const fireworks=events.find(e=>e.id==='uss-fireworks');
assert.equal(fireworks.dates.length,16);assert(!fireworks.dates.includes('2026-12-06'));assert(fireworks.dates.includes('2027-01-02'));
assert.equal(events.find(e=>e.id==='concert').dates.join(','),'2026-12-17,2026-12-19,2026-12-20,2026-12-22');
assert.equal(events.find(e=>e.id==='zouk-party').dates.join(','),'2026-12-16,2026-12-23');
assert.equal(events.find(e=>e.id==='uss-light').end,'2027-01-03');
assert(events.find(e=>e.id==='stadium-light').tentative);assert(events.find(e=>e.id==='mandai-dine').tentative);
// All referenced local files must exist under the project path.
for(const [,asset] of fs.readFileSync('index.html','utf8').matchAll(/(?:src|href)="([^"#]+)"/g)){if(!asset.startsWith('http'))assert(fs.existsSync(asset),'Missing asset '+asset);}
assert(fs.existsSync('assets/bts-background.jpg'));
new vm.Script(fs.readFileSync('app.js','utf8'));
console.log(`PASS: ${events.length} event records, ${Object.keys(venues).length} venues; bilingual content, sparse dates, continuation dates and local assets validated.`);
