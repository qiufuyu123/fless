'''
A lite pack-up tool for TemperMonkey
for my personal use

23/12/3 start-up by qiufuyu
'''

import os
import sys

import jsmin

def process(output):
    res = os.listdir('./res')
    src = sorted(os.listdir('./src'))
    o = ''
    for i in src:
        with open('./src/'+i) as f:
            o += '\n//Packup:'+i+' file.\n'
            o += f.read()
    o+='\n//Packup finished!'
    
    for i in res:
        ctx = '`'
        with open('./res/'+i) as f:
            ctx+=f.read()
        ctx+='`/*RES'+i+'*/'
        #print('replace: '+'`'+i+'`')
        o=o.replace('`'+i+'`',ctx)
    o=jsmin.jsmin(o)
    with open(output,'w') as f:
        f.write(o)
    print('Pack up finished, Total size: '+str(len(o))+' bytes')
if __name__ == '__main__':
    args = sys.argv
    if len(args) != 2:
        print('Require output file !')
    else:
        process(args[1])
