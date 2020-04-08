# Employee Directory

_There is a deliberate "error" in the UI, please read the further development section for an explanation!_

## Further Development

As I mentioned at the start, and as you may have noticed if you already tested out the site, there is a pretty obvious "error" in the UI. I use the quotations because it is not really an error, it is by design. I'll explain....

I wanted to implement React's `useContext` feature in my project. Upon completion to the brief, I was looking for ways to further enhance my project. I realized halfway through doing this that I was about to break a lot of my code, in as much as this kind of `hook` cannot be implemented _as is_ into a class component, only a function component. In order to avoid rewriting the whole class and all accompanying methods, and restructuring all the state elements involved, I decided to simply implement ONE case of my custom `useContext` hook in operation.

As a result, you, the user, will always see the same one "fake" (all the employees are faked, but this one is double faked) employee at the top of the list, regardless of which search or organize functions are called. In fact, even when the search results should yield nothing (a name search for "kfjagkdgfa" should not return any results), this employee remains. Here is why:

```js
    function List(props) {
        const [employees, setEmployees] = useContext(EmployeeContext);
        const propsEmployees = [...props.employees];
        propsEmployees.unshift(...employees);
        return (
            <ul className="list-group">
            {propsEmployees.map((employee) =>
```

First I am importing an array `employees` from `EmployeeContext`. This is actually just an array of this one employee, with the JSON matching the format of the actual API response. A new array is created as a copy (since props are immutable) of the array containing all the API employees, and then the fake is added (using `unshift` so the fake is always first and appears at the top) to the array. Then the `.map` function which is responsible for generating what appears on the screen runs on this ammended array. So even when a search is run on the array, this fake is always added AFTER the search is performed.

As I said, the only reason I am doing this is to demonstrate the technique of using `useContext`.

If I was to switch the class component in App over to a function, in order to continue to use the dynamic data, here is how I would do it:

From inside the `EmployeeContext` file, I am already exporting `setEmployees` as a function. Within the hypothetical App function component, I would include the following line:

```js
const [employees, setEmployees] = useContext(EmployeeContext);
```

and of course I would be sure to input all the relevant components for this to work (all `no-unused-vars` linting errors are related to this implementation). Instead of using `componentDidMount` for the API request I would be using `useEffect`, and now instead of calling `this.setState`, I would simply call `setEmployees`.
