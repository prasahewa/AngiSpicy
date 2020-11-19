import { Injectable } from '@angular/core';
import { Spicy } from './spicy.modle';

@Injectable()
export class DetailSevices {
    spicys: Spicy [] = [
        {
            id:'1',
            title: 'Cinnamon1',
            imgUrl: "assets/cmnx.JPG",
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468',
            ingredients:[ 
                {
                    title:'kothhamalli',
                    desc:'dry kotthamalli'
                }
            ]
        },

        {
            id:'2',
            title: 'Cinnamon2',
            imgUrl: 'assets/cardx.JPG',
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'
        },
        {
            id:'3',
            title: 'Cinnamon3',
            imgUrl: 'assets/chilyx.JPG',
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'
        },

        {
            id:'4',
            title: 'Cinnamon4',
            imgUrl: 'assets/clovex.JPG',
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'
        },
        {
            id:'5',
            title: 'Cinnamon5',
            imgUrl: 'assets/garx.JPG',
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'
        },

        {
            id:'6',
            title: 'Cinnamon6',
            imgUrl: 'assets/turx.JPG',
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'
        },
        {
            id:'7',
            title: 'Cinnamon6',
            imgUrl: 'assets/nutmegx.JPG',
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'
        },
        {
            id:'8',
            title: 'Cinnamon6',
            imgUrl: 'assets/pep.JPG',
            desc: 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
            link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'
        }

    ]

    getAllSpicy(){
        return this.spicys;
    }
    getAllSpicyChk(){
        console.log(this.spicys.constructor);
    }

    /*addSpicy(wkid:string,wktitle: string,wkimgUrl: string,wkdesc: string,wklink: string) */

    addSpicy(spicy:Spicy){
        spicy.id=(Math.random().toString(36).slice(2));
        this.spicys.push(spicy);

            /* 
                {id: wkid,
                title: wktitle,
                imgUrl: wkimgUrl,
                desc: wkdesc,
                link: wklink}
           */           
    }

    updateSpiciy(spicy:Spicy){
        const ind=this.spicys.findIndex(s=>s.id===spicy.id);
        this.spicys[ind]=spicy;
    }

    delSpice(spicy:Spicy){
    const ind=this.spicys.findIndex(s=>s.id===spicy.id);
    this.spicys.splice(ind,1);
    }

}