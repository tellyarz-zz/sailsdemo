/**
 * PersonController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'create': async (req, res) => {
        try{
            const value = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                age: req.body.age,
                spouse: req.body.spouse 
            };
            const result = await Person.create(value);
            return res.send(result);
        }catch(e){
            return res.send({status:'failed', reason:e.message});
        }
    },

    'getSpouse': async (req, res) => {
        try{
            const value = {firstname: req.query.firstname};
            const result = await Person.findOne(value);
            return res.send(result.getSpouse());
        }catch(e){
            return res.send({status:'failed', reason:e.message});
        }
    }
};

