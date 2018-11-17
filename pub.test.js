const {subscription, listen, mute, broadcast} = require('./pub');

describe('subscriptions', ()=>{
    it('should store data as an object',()=>{
        expect(subscription).not.toBeUndefined(); 
        expect(typeof subscription === 'object'); 
    })
});

describe('listen', ()=>{
    it('should store callbacks in an array',()=>{
        const callback = jest.fn(); 
        listen('foo', callback); 

        expect(Array.isArray(subscription.foo));
        expect(listen.foo[0]).toBe(callback); 
    })

    it('should  store multiple callbacks', ()=>{
        const cb1 = jest.fn(); 
        const cb2 = jest.fn(); 
        listen('bar', cb1); 
        listen ('bar', cb2); 

        expect(subscription.bar.length).toEqual(2); 
        expect(subscription.bar[0]).toBe(cb1);
        expect(subscription.bar[1]).toBe(cb2); 
    })
});


describe('broadcast',()=>{
    it('should call all listening callbacks',()=>{
        const cb1 = jest.fn(); 
        const cb2 = jestn.fn(); 
        listen('baz', cb1); 
        listen('baz', cb2); 

        broadcast('baz', 1); 

        expect(cb1).toHaveBeenCalledWith(1); 
        expect(cb2).toHaveBeenCalledWith(1); 
    })
    it('should be not error when called on a key with no listeners',()=>{
        let err;
        try{
            broadcast('kriswu',2); 
        }catch(e){
            err = e; 
        }
        expect(err).toBeUndefined(); 

    })
    it('should be able to take an arbitrary amount of arguments',()=>{
        const callback = jest.fn(); 
        listen('other', callback); 

        broadcast('other', 1,2,3,4);
        
        expect(callback).toHaveBeenCalledWith(1,2,3,4); 
    })
})

describe('mute',()=>{
    it('should be able to stop listening by passing the same callback to mute',()=>{
        const cb1 = jest.fn(); 
        const cb2 = jest.fn(); 
        listen('thing', cb1); 
        listen('thing', cb2); 
        mute('thing', cb1); 

        broadcast('thing', 1); 

        expect(cb1).not.toHaveBeenCalled(); 
        expect(cb2).toHaveBeenCalledWith(1); 
    });

    it('should not error when you try to mute something that is not being listened to',()=>{
        let err;
        const callback = jest.fn(); 
        listen('what', callback); 

        try{
            mute('what', jest.fn()); 
            mute('isThis', jest.fn()); 
        }catch(e){
            err = e; 
        }
        expect(err).toBeUndefined(); 
    })
})