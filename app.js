'use strict'

import * as THREE from 'https://cdn.skypack.dev/three'

(() => {

    const s = new THREE.Scene()
    
    const c = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2500)
    c.position.set(0, 0, 100)

    c.rotation.x = 1.5
    

    const r = new THREE.WebGLRenderer({
    
        antialias: true

    })
    r.setSize(window.innerWidth, window.innerHeight)
    r.setPixelRatio(devicePixelRatio)
    
    document.body.appendChild(r.domElement)

    s.add(new THREE.AmbientLight(0xffffff, 1))


    const b = () => {

        for (let i = 0; i < 500; i++) {

            const xg = new THREE.SphereGeometry(2.5, 1, 1)

            const xm = new THREE.MeshBasicMaterial({
                
                color: 0xffffff

            })

            const x = new THREE.Mesh(xg, xm)

            x.position.set(Math.random() * (2000 + 2000 + 1) - 2000, Math.random() * (2500 - 1000 + 1) + 1000, Math.random() * (2000 + 2000 + 1) - 2000)

            s.add(x)

        }

    }; b()

    let x = [
        ['C A S S A N D R A', 50],
        ['Tout d\'abord, je t\'aime beaucoup,', 25],
        ['mais je ne ne sais trop quoi dire.', 10],
        ['Deja, merci d\'etre dans ma vie :)', -5],
        ['Il est super plaisant de t\'avoir a', -30],
        ['mes cotes et j\'espere que cela', -45],
        ['pourra durer au fil du temps et', -60],
        ['que tout ira bien entre nous. J\'', -75],
        ['ai peu d\'inspiration, excuses-', -90],
        ['en moi. :( On se prend parfois', -105],
        ['mais je pense que c\'est pour', -120],
        ['de bonnes raisons. :)', -135],
        ['Parlons de tes bobos, c\'est', -160],
        ['simple. Je n\'ai vraiment pas', -175],
        ['envie de rester si tu te fais', -190],
        ['', -205]
    ]

    const f = new THREE.FontLoader()

    f.load('helvetiker_bold.typeface.json', f => {

        for( let i = 0; i < x.length; i++) {

            const tg = new THREE.TextGeometry(x[i][0], {
            
                font: f,
                height: .1,
                size: 7.5

            })
            tg.center()
        
            const tm = new THREE.MeshBasicMaterial({

                color: new THREE.Color('rgb(250, 250, 38)')

            })

            const t = new THREE.Mesh(tg, tm)

            t.position.set(0, x[i][1], 50)

            s.add(t)

            const a = () => {

                requestAnimationFrame(a)

                t.position.y += .125

            }; a()

        }

    })

    r.setAnimationLoop(() => {

        r.render(s, c)

    })

    window.addEventListener('resize', () => {

        c.aspect = window.innerWidth / window.innerHeight
        c.updateProjectionMatrix()
        r.setSize(window.innerWidth, window.innerHeight)

    })

})()
