import DS from 'ember-data';

export default DS.Model.extend({
  commit: DS.belongsTo('commit', {async: true}),
  name: DS.attr('string'),
  nova_id: DS.attr('string'),
  floating_ip: DS.attr('string'),
  status: DS.attr('number'),
  is_auth: DS.attr('boolean'),
  user: DS.belongsTo('user', {async: true}),
  project: DS.belongsTo('project', {async: true}),
  systemimage: DS.belongsTo('systemimage', {async: true}),
  vmsize: DS.belongsTo('vmsize', {async: true}),
  technos: DS.hasMany('techno', {async: true}),
  created_at: DS.attr('date')
});