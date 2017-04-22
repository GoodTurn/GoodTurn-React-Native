# General Stuff

* Use Immutable.js. This speeds your code up HEAVILY! It prevents object mutation.
* Redux dev tools https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
* add window.devToolsExtension && window.devToolsExtension() in your index.js middleware to get it working
* Why lodash?
* Use a UI library like Semantic-UI-React instead of trying to style EVERYTHING yourself or adding icon pics
* For imports, do absolutes first.
* Use a linter. I like airbnb's linting rules.
* Use UpperCase (<-- like that) for components.
* => instead of function for everything.
* When you do methods don't just do it like this: ```doSomething(){ // do something}``` Instead do it like this: `doSomething = () => { // this automatically binds }` you won't have to do this.doSomething = this.doSomething.bind(this);
* You can do `const { selectedProfile } = this.props;` instead of doing this.props or this.state everywhere
* You can use `React.PureComponent` sometimes instead of React.Component. This will speed up your app as it does a shallow check of all your props to see if it has to render again. (This is instead of doing `shouldComponentUpdate(){}`)
* Look up a flat data structure vs nested. (use flat data. Normalizr would help) You are using a lot of arrays. I would use more objects/maps. They're faster to look things up.
* Axios vs fetch. Axios is honestly fine. Fetch doesn't use a library since it is built in. But because it is a low-level API, there is a LITTLE more coding. The downside is, fetch doesn't support every browser just yet (about 70% globally - https://caniuse.com/#search=fetch)


# Containers

## ProfileFeed

* I have a thing against switch statements. (I use objects instead)
* Take logic out of render
* ```profiles.map((profile, i) => {
  return <SingleProfile
    key={profile.id}
    profile={profile}
    onProfileSelect={this.props.selectProfile}
    selectedID={this.props.selectedProfile ? this.props.selectedProfile.id : null}/>
});``` can be simplified to ```profiles.map((profile, i) => (
  <SingleProfile
    key={profile.id}
    profile={profile}
    onProfileSelect={this.props.selectProfile}
    selectedID={this.props.selectedProfile ? this.props.selectedProfile.id : null}/>
));```
* ```function mapStateToProps(store) {
  return {
    profiles: store.profiles,
    selectedProfile: store.selectedProfile,
  };
}``` can be simplified to ```const mapStateToProps = (store) => ({
  profiles: store.profiles,
  selectedProfile: store.selectedProfile,
});```

## SearchBar

* `this.setState({term: term});` can be simplified to `this.setState({ term });`
* ```<input
  className="profileSearch"
  placeholder="Search profiles"
  value={this.state.term}
  onChange={event => this.onInputChange(event.target.value)} />``` Don't put functions in the render. It creates a new function everytime. Make a method in the class
* ```function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}``` can be simplified to ```const mapDispatchToProps = (dispatch) => bindActionCreators({ search }, dispatch);```

## SelectedProfile

* Get logic out of render. Make a wrapper component for your logic.
*
* `{ props.selectedProfile ? education ? education : "" : ""}` can be simplified to `{ props.selectedProfile && education }`. The `&&` operator returns that last true item. If anything is false, it returns `null`.

## SingleProfile

* Don't use an array []. Use Immutable.js' `new List();`
* You are mutating the data here. Each push will cause a new re-render.
* Put this logic in a container/wrapper component.

## Reducers

* They are fine for now. I will built something easier to use :).

#### Simplification
* ```let feed = action.payload.data.feed
      if (feed) {
        for (var i = 0; i < feed.length; i++) {
          feed[i].distance /= 1609;
          if (feed[i].distance  < 1) {
            feed[i].distance *= 5280;
            if(Math.ceil(feed[i].distance) === 1) {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' foot';
            } else {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' feet';
            }
          } else {
            if(Math.ceil(feed[i].distance) === 1) {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' mile';
            } else {
              feed[i].distance = '' + Math.ceil(feed[i].distance) + ' miles';
            }
          }
        }

      }``` into ```let dataFeed = action.payload.data.feed
      if (dataFeed) {
        for (feed of dataFeed) {
          feed.distance /= 1609;
          if (feed.distance  < 1) {
            feed.distance *= 5280;
            const distance = (Math.ceil(feed.distance);
            feed.distance = `${distance} ${distance === 1 ? 'foot' : 'feet'}`;
          } else {
            const distance = (Math.ceil(feed.distance);
            feed.distance = `${distance} ${distance === 1 ? 'mile' : 'miles'}`;
          }
        }
      }```
* with `case SEARCH_FILTER:` I'm sure there's a way I can clean this up with `currrying` and without using recursion (since that makes it slower). But that'll be later. For now, let's just trust this searchTree works.
