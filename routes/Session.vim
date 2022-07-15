let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/routes
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/tests
tabnew
tabnew
tabrewind
edit ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/tests/middleware.test.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 52 + 29) / 58)
exe 'vert 1resize ' . ((&columns * 118 + 118) / 237)
exe '2resize ' . ((&lines * 52 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 118 + 118) / 237)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
6
normal! zo
6
normal! zo
7
normal! zo
7
normal! zo
8
normal! zo
13
normal! zo
13
normal! zo
let s:l = 15 - ((14 * winheight(0) + 26) / 52)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 07|
wincmd w
argglobal
if bufexists("~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/middleware/token_validation.js") | buffer ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/middleware/token_validation.js | else | edit ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/middleware/token_validation.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 26) / 52)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
exe '1resize ' . ((&lines * 52 + 29) / 58)
exe 'vert 1resize ' . ((&columns * 118 + 118) / 237)
exe '2resize ' . ((&lines * 52 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 118 + 118) / 237)
tabnext
edit ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/tests/app.test.js
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 9 - ((8 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
9
normal! 03|
tabnext
edit ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/routes/user.routes.js
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 13 - ((12 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
13
normal! 032|
tabnext 3
badd +11 ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/tests/middleware.test.js
badd +0 ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/tests
badd +0 ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/tests/app.test.js
badd +1 ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/routes/user.routes.js
badd +1 ~/Escritorio/Mis_cosas/desarrollo\ web\ /Mis-Proyectos/Solo_Backend/API_Simple-Notes_Node-Mongo/middleware/token_validation.js
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOSAc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
