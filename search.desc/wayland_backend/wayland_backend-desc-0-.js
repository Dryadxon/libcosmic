searchState.loadedDescShard("wayland_backend", 0, "Backend API for wayland crates\nHelper macro for quickly making a <code>Message</code>\nTypes and utilities for manipulating the Wayland protocol\nRust implementations of the Wayland backends\nReexport of the <code>smallvec</code> crate, which is part of …\nImplementations of the Wayland backends using the system …\nSpecial interface representing an anonymous object\nDescribes whether an argument may have a null value.\nEnum of possible argument of the protocol\nEnum of possible argument types as recognized by the wire\n<code>Vec&lt;u8&gt;</code>\n<code>Vec&lt;u8&gt;</code>\nA file descriptor argument. Represented by a <code>RawFd</code>.\nA file descriptor argument. Represented by a <code>RawFd</code>.\nA signed fixed point number with 1/256 precision\nA signed fixed point number with 1/256 precision\nNumber of arguments that are stocked inline in a <code>Message</code> …\nAn integer argument. Represented by a <code>i32</code>.\nAn integer argument. Represented by a <code>i32</code>.\nDescription of wayland interface.\nRepresents a message that has been sent from some object.\nWire metadata of a given message\nId of a newly created wayland object\nId of a newly created wayland object\nNull values are forbidden.\nId of a wayland object\nId of a wayland object\nDescription of the protocol-level information of an object\nA protocol error\nA string. This is represented as a <code>CString</code> in a message.\nCString\nAn unsigned integer argument. Represented by a <code>u32</code>.\nAn unsigned integer argument. Represented by a <code>u32</code>.\nThe stored value does not match one defined by the …\nThe interpreted value\nAn enum value in the protocol.\nError representing an unknown numeric variant for a <code>WEnum</code>\nNull values are allowed.\nThe interfaces passed into this message as arguments.\nThe arguments of the message.\nA C representation of this interface that may be used to …\nThe child interface created from this message.\nThe error code associated with the error\nA list that describes every event this interface supports.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstructs an enum from the integer format used by the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nRetrieve the type of a given argument instance\nThe protocol ID\nThe interface\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this <code>WEnum</code> into a result\nWhether this message is a destructor\nMap some closure on all Fd contained in this message, to …\nThe message sent by the server describing the error\nThe name of the interface.\nName of this message\nThe id of the object that caused the error\nThe interface of the object that caused the error\nThe opcode of the message.\nA list that describes every request this interface …\nReturns true if the two interfaces are the same.\nReturns true if the type of the argument is the same.\nThe id of the object that sent the message.\nSignature of the message\nMinimum required version of the interface\nThe maximum supported version of the interface.\nThe version\nClient-side rust implementation of a Wayland protocol …\nServer-side rust implementation of a Wayland protocol …\nA Wayland client backend\nAn error generated when trying to act on an invalid …\nThe connection encountered an IO error\nAn error type representing the failure to load libwayland\nA trait representing your data associated to an object\nAn ID representing a Wayland object\nThe connection encountered a protocol error\nGuard for synchronizing event reading across multiple …\nAn error that can occur when using a Wayland connection\nA weak handle to a <code>Backend</code>\nTry to initialize a Wayland backend on the provided unix …\nAccess the Wayland socket FD for polling\nHelper for accessing user data\nHelper for forwarding a Debug implementation of your …\nNotification that the object has been destroyed and is no …\nDispatches the inner queue of this backend if necessary\nGet the object ID for the <code>wl_display</code>\nReturns a boxed object from a boxed trait object if the …\nReturns an <code>Arc</code>-ed object from an <code>Arc</code>-ed trait object if …\nReturns a mutable reference to the object within the trait …\nReturns an <code>Rc</code>-ed object from an <code>Rc</code>-ed trait object if the …\nReturns a reference to the object within the trait object …\nGet a <code>WeakBackend</code> from this backend\nDispatch an event for the associated object\nFlush all pending outgoing requests to the server\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAccess the object data associated with a given object ID\nGet the detailed protocol information about a wayland …\nInterface of the represented object\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the trait object wraps an object of type …\nCheck if this is a null ID\nGet the last error that occurred on this backend\nCreate a null object ID\nAccess the Wayland socket FD for polling\nCreate a new reading guard\nReturn the protocol-level numerical ID of this object\nAttempt to read events from the Wayland socket\nSends a request to the server\nSet the object data associated with a given object ID\nTry to upgrade this weak handle to a <code>Backend</code>\nA backend object that represents the state of a wayland …\nA trait representing your data associated to a client\nAn ID representing a Wayland client\nThe connection has been closed by the server or client.\nHolds the client credentials\nDescribes why a client has been disconnected from the …\nA trait representing the handling of new bound globals\nAn Id representing a global\nDescription of a global advertised to some clients.\nMain handle of a backend to the Wayland protocol\nAn error type representing the failure to initialize a …\nAn error generated when trying to act on an invalid …\nInitialized failed due to an underlying I/O error\nThe wayland system library could not be loaded\nA trait representing your data associated to an object\nAn ID representing a Wayland object\nThe server has sent the client a protocol error, …\nA weak reference to a <code>Handle</code>\nA global has been bound\nCheck if given client is allowed to interact with given …\nCreates a global of the specified interface and version …\nCreate a new object for given client\nHelper for forwarding a Debug implementation of your …\nHelper for forwarding a Debug implementation of your …\nHelper for forwarding a Debug implementation of your …\nNotification that the object has been destroyed and is no …\nDisables a global object that is currently active.\nWhether the global is disabled.\nNotification that the client is disconnected\nDispatches all pending messages from all clients.\nDispatches all pending messages from the specified client.\nReturns a boxed object from a boxed trait object if the …\nReturns a boxed object from a boxed trait object if the …\nReturns a boxed object from a boxed trait object if the …\nReturns an <code>Arc</code>-ed object from an <code>Arc</code>-ed trait object if …\nReturns an <code>Arc</code>-ed object from an <code>Arc</code>-ed trait object if …\nReturns an <code>Arc</code>-ed object from an <code>Arc</code>-ed trait object if …\nReturns a mutable reference to the object within the trait …\nReturns a mutable reference to the object within the trait …\nReturns a mutable reference to the object within the trait …\nReturns an <code>Rc</code>-ed object from an <code>Rc</code>-ed trait object if the …\nReturns an <code>Rc</code>-ed object from an <code>Rc</code>-ed trait object if the …\nReturns an <code>Rc</code>-ed object from an <code>Rc</code>-ed trait object if the …\nReturns a reference to the object within the trait object …\nReturns a reference to the object within the trait object …\nReturns a reference to the object within the trait object …\nGet a <code>WeakHandle</code> from this handle\nFlushes pending events destined for a client.\nFlushes pending events destined for a client.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the id of the client which owns the object.\nRetrive the <code>Credentials</code> of a client\nReturns the data associated with a client.\nReturns the handler which manages the visibility and …\nReturns the data associated with an object.\nReturns the data associated with an object as a <code>dyn Any</code>\ngid of the client\nReturns information about a global.\nReturns a handle which represents the server side state of …\nNotification that the client was initialized\nInitializes a connection with a client.\nReturns the interface of this object.\nThe interface of the global.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the trait object wraps an object of type …\nReturns true if the trait object wraps an object of type …\nReturns true if the trait object wraps an object of type …\nReturns whether this object is a null object.\nKills the connection to a client.\nInitialize a new Wayland backend\nReturns an object id that represents a null object.\nRetrieve the <code>ObjectId</code> for a wayland object given its …\nGet the detailed protocol information about a wayland …\npid of the client\nReturns the underlying file descriptor.\nPosts a protocol error on an object. This will also …\nReturn the protocol-level numerical ID of this object\nRemoves a global object and free its ressources.\nDispatch a request for the associated object\nCheck if two object IDs are associated with the same client\nSend an event to the client\nSets the data associated with some object.\nuid of the client\nTry to upgrade this weak handle to a <code>Handle</code>\nThe version of the global that is advertised to clients.\nInvokes a closure for all clients connected to this server\nInvokes a closure for all objects owned by a client.\nClient-side implementation of a Wayland protocol backend …\nA Wayland client backend\nAn error generated when trying to act on an invalid …\nThe connection encountered an IO error\nAn error type representing the failure to load libwayland\nA trait representing your data associated to an object\nAn ID representing a Wayland object\nThe connection encountered a protocol error\nGuard for synchronizing event reading across multiple …\nAn error that can occur when using a Wayland connection\nA weak handle to a <code>Backend</code>\nGet the underlying libwayland pointer for this object\nTry to initialize a Wayland backend on the provided unix …\nAccess the Wayland socket FD for polling\nHelper for accessing user data\nHelper for forwarding a Debug implementation of your …\nNotification that the object has been destroyed and is no …\nDispatches the inner queue of this backend if necessary\nGet the object ID for the <code>wl_display</code>\nReturns the underlying <code>wl_display</code> pointer to this backend.\nReturns a boxed object from a boxed trait object if the …\nReturns an <code>Arc</code>-ed object from an <code>Arc</code>-ed trait object if …\nReturns a mutable reference to the object within the trait …\nReturns an <code>Rc</code>-ed object from an <code>Rc</code>-ed trait object if the …\nReturns a reference to the object within the trait object …\nGet a <code>WeakBackend</code> from this backend\nDispatch an event for the associated object\nFlush all pending outgoing requests to the server\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a Backend from a foreign <code>*mut wl_display</code>.\nCreates an object id from a libwayland-client pointer.\nAccess the object data associated with a given object ID\nGet the detailed protocol information about a wayland …\nInterface of the represented object\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the trait object wraps an object of type …\nCheck if this is a null ID\nGet the last error that occurred on this backend\nTake over handling for a proxy created by a third party.\nCreate a null object ID\nAccess the Wayland socket FD for polling\nCreate a new reading guard\nReturn the protocol-level numerical ID of this object\nAttempt to read events from the Wayland socket\nSends a request to the server\nSet the object data associated with a given object ID\nTry to upgrade this weak handle to a <code>Backend</code>")