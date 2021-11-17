import claim from './claim';
import collectionobject from './collectionobject';
import place from './place';

export default () => (configContext) => ({
  extensions: {
    nagpra: {
      claim: claim(configContext),
      collectionobject: collectionobject(configContext),
      place: place(configContext),
    },
  },
});
