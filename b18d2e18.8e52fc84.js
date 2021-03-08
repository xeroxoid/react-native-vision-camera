(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return m}));var r=t(3),n=t(7),c=(t(0),t(119)),i={id:"camera.camera-1",title:"Class: Camera",sidebar_label:"Camera",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/camera.camera-1",id:"api/classes/camera.camera-1",isDocsHomePage:!1,title:"Class: Camera",description:"Class: Camera",source:"@site/docs/api/classes/camera.camera-1.md",slug:"/api/classes/camera.camera-1",permalink:"/react-native-vision-camera/docs/api/classes/camera.camera-1",editUrl:null,version:"current",sidebar_label:"Camera",sidebar:"someSidebar",previous:{title:"Module: utils/FormatFilter",permalink:"/react-native-vision-camera/docs/api/modules/utils_formatfilter"},next:{title:"Class: CameraCaptureError",permalink:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"}},b=[{value:"A powerful <code>&lt;Camera&gt;</code> component.",id:"a-powerful-camera-component",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"focus",id:"focus",children:[]},{value:"getAvailablePhotoCodecs",id:"getavailablephotocodecs",children:[]},{value:"getAvailableVideoCodecs",id:"getavailablevideocodecs",children:[]},{value:"startRecording",id:"startrecording",children:[]},{value:"stopRecording",id:"stoprecording",children:[]},{value:"takePhoto",id:"takephoto",children:[]},{value:"takeSnapshot",id:"takesnapshot",children:[]},{value:"getAvailableCameraDevices",id:"getavailablecameradevices",children:[]},{value:"getCameraPermissionStatus",id:"getcamerapermissionstatus",children:[]},{value:"getMicrophonePermissionStatus",id:"getmicrophonepermissionstatus",children:[]},{value:"requestCameraPermission",id:"requestcamerapermission",children:[]},{value:"requestMicrophonePermission",id:"requestmicrophonepermission",children:[]}]}],s={toc:b};function m(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-camera"},"Class: Camera"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera"},"Camera"),".Camera"),Object(c.b)("h3",{id:"a-powerful-camera-component"},"A powerful ",Object(c.b)("inlineCode",{parentName:"h3"},"<Camera>")," component."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"<Camera>")," component's most important (and therefore ",Object(c.b)("em",{parentName:"p"},"required"),") properties are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/interfaces/camera.cameradeviceprops#device"},"CameraDeviceProps.device"),": Specifies the ",Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},"CameraDevice")," to use. Get a ",Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},"CameraDevice")," by using the ",Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/modules/hooks_usecameradevices#usecameradevices"},"useCameraDevices")," hook, or manually by using the ",Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#getavailablecameradevices"},"Camera.getAvailableCameraDevices")," function."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/react-native-vision-camera/docs/api/interfaces/camera.cameradynamicprops#isactive"},"CameraDynamicProps.isActive"),": A boolean value that specifies whether the Camera should actively stream video frames or not. This can be compared to a Video component, where ",Object(c.b)("inlineCode",{parentName:"li"},"isActive")," specifies whether the video is paused or not. If you fully unmount the ",Object(c.b)("inlineCode",{parentName:"li"},"<Camera>")," component instead of using ",Object(c.b)("inlineCode",{parentName:"li"},"isActive={false}"),", the Camera will take a bit longer to start again.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  const devices = useCameraDevices('wide-angle-camera')\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      isActive={true}\n    />\n  )\n}\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"component"))," "),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"PureComponent"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#cameraprops"},Object(c.b)("em",{parentName:"a"},"CameraProps")),", CameraState",">"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"Camera")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"focus"},"focus"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"focus"),"(",Object(c.b)("inlineCode",{parentName:"p"},"point"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/point.point-1"},Object(c.b)("em",{parentName:"a"},"Point")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Focus the camera to a specific point in the coordinate system."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"await camera.current.focus({\n  x: tapEvent.x,\n  y: tapEvent.y\n})\n")),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"),Object(c.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"point")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/point.point-1"},Object(c.b)("em",{parentName:"a"},"Point"))),Object(c.b)("td",{parentName:"tr",align:"left"},"The point to focus to. This should be relative to the Camera view's coordinate system, and expressed in Pixel on iOS and Points on Android.  ",Object(c.b)("em",{parentName:"td"}," ",Object(c.b)("inlineCode",{parentName:"em"},"(0, 0)")," means ",Object(c.b)("strong",{parentName:"em"},"top left"),".  ")," ",Object(c.b)("inlineCode",{parentName:"td"},"(CameraView.width, CameraView.height)")," means ",Object(c.b)("strong",{parentName:"td"},"bottom right"),".  Make sure the value doesn't exceed the CameraView's dimensions.")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L363"},"Camera.tsx:363")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getavailablephotocodecs"},"getAvailablePhotoCodecs"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getAvailablePhotoCodecs"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameracodec#cameraphotocodec"},Object(c.b)("em",{parentName:"a"},"CameraPhotoCodec")),"[]",">"),Object(c.b)("p",null,"Get a list of photo codecs the current camera supports. Returned values are ordered by efficiency (descending)."),Object(c.b)("p",null,"This function can only be called after the camera has been initialized,\nso only use this after the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/camera.cameraeventprops#oninitialized"},"onInitialized")," event has fired."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameracodec#cameraphotocodec"},Object(c.b)("em",{parentName:"a"},"CameraPhotoCodec")),"[]",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L394"},"Camera.tsx:394")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getavailablevideocodecs"},"getAvailableVideoCodecs"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getAvailableVideoCodecs"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameracodec#cameravideocodec"},Object(c.b)("em",{parentName:"a"},"CameraVideoCodec")),"[]",">"),Object(c.b)("p",null,"Get a list of video codecs the current camera supports.  Returned values are ordered by efficiency (descending)."),Object(c.b)("p",null,"This function can only be called after the camera has been initialized,\nso only use this after the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/camera.cameraeventprops#oninitialized"},"onInitialized")," event has fired."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameracodec#cameravideocodec"},Object(c.b)("em",{parentName:"a"},"CameraVideoCodec")),"[]",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L379"},"Camera.tsx:379")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"startrecording"},"startRecording"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"startRecording"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/videofile.recordvideooptions"},Object(c.b)("em",{parentName:"a"},"RecordVideoOptions")),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Start a new video recording."),Object(c.b)("p",null,"Records in the following formats:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"iOS"),": QuickTime (",Object(c.b)("inlineCode",{parentName:"li"},".mov"),")"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Android"),": MPEG4 (",Object(c.b)("inlineCode",{parentName:"li"},".mp4"),")")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"blocking"))," This function is synchronized/blocking."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},"CameraCaptureError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror#code"},"CameraCaptureError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"camera.current.startRecording({\n  onRecordingFinished: (video) => console.log(video),\n  onRecordingError: (error) => console.error(error),\n})\nsetTimeout(() => {\n  camera.current.stopRecording()\n}, 5000)\n")),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/videofile.recordvideooptions"},Object(c.b)("em",{parentName:"a"},"RecordVideoOptions")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L308"},"Camera.tsx:308")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stoprecording"},"stopRecording"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"stopRecording"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Stop the current video recording."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},"CameraCaptureError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror#code"},"CameraCaptureError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"await camera.current.startRecording()\nsetTimeout(async () => {\n const video = await camera.current.stopRecording()\n}, 5000)\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L337"},"Camera.tsx:337")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"takephoto"},"takePhoto"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"takePhoto"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/photofile.takephotooptions"},Object(c.b)("em",{parentName:"a"},"TakePhotoOptions")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/photofile.photofile-1"},Object(c.b)("em",{parentName:"a"},"PhotoFile")),">"),Object(c.b)("p",null,"Take a single photo and write it's content to a temporary file."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror"},"CameraCaptureError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameracaptureerror#code"},"CameraCaptureError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const photo = await camera.current.takePhoto({\n  qualityPrioritization: 'quality',\n  flash: 'on',\n  enableAutoRedEyeReduction: true\n})\n")),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/photofile.takephotooptions"},Object(c.b)("em",{parentName:"a"},"TakePhotoOptions")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/photofile.photofile-1"},Object(c.b)("em",{parentName:"a"},"PhotoFile")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L253"},"Camera.tsx:253")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"takesnapshot"},"takeSnapshot"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"takeSnapshot"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/snapshot.takesnapshotoptions"},Object(c.b)("em",{parentName:"a"},"TakeSnapshotOptions")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/photofile.photofile-1"},Object(c.b)("em",{parentName:"a"},"PhotoFile")),">"),Object(c.b)("p",null,"Take a snapshot of the current preview view."),Object(c.b)("p",null,"This can be used as an alternative to ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#takephoto"},"Camera.takePhoto")," if speed is more important than quality"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"platform"))," Android"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const photo = await camera.current.takeSnapshot({\n  quality: 85,\n  skipMetadata: true\n})\n")),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/interfaces/snapshot.takesnapshotoptions"},Object(c.b)("em",{parentName:"a"},"TakeSnapshotOptions")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/photofile.photofile-1"},Object(c.b)("em",{parentName:"a"},"PhotoFile")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L275"},"Camera.tsx:275")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getavailablecameradevices"},"getAvailableCameraDevices"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getAvailableCameraDevices"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},Object(c.b)("em",{parentName:"a"},"CameraDevice")),"[]",">"),Object(c.b)("p",null,"Get a list of all available camera devices on the current phone."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"example"))," "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const devices = await Camera.getAvailableCameraDevices()\nconst filtered = devices.filter((d) => matchesMyExpectations(d))\nconst sorted = devices.sort(sortDevicesByAmountOfCameras)\nreturn {\n  back: sorted.find((d) => d.position === "back"),\n  front: sorted.find((d) => d.position === "front")\n}\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},Object(c.b)("em",{parentName:"a"},"CameraDevice")),"[]",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L419"},"Camera.tsx:419")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getcamerapermissionstatus"},"getCameraPermissionStatus"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getCameraPermissionStatus"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionstatus"},Object(c.b)("em",{parentName:"a"},"CameraPermissionStatus")),">"),Object(c.b)("p",null,"Gets the current Camera Permission Status. Check this before mounting the Camera to ensure\nthe user has permitted the app to use the camera."),Object(c.b)("p",null,"To actually prompt the user for camera permission, use ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#requestcamerapermission"},"Camera.requestCameraPermission"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionstatus"},Object(c.b)("em",{parentName:"a"},"CameraPermissionStatus")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L434"},"Camera.tsx:434")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getmicrophonepermissionstatus"},"getMicrophonePermissionStatus"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"getMicrophonePermissionStatus"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionstatus"},Object(c.b)("em",{parentName:"a"},"CameraPermissionStatus")),">"),Object(c.b)("p",null,"Gets the current Microphone-Recording Permission Status. Check this before mounting the Camera to ensure\nthe user has permitted the app to use the microphone."),Object(c.b)("p",null,"To actually prompt the user for microphone permission, use ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#requestmicrophonepermission"},"Camera.requestMicrophonePermission"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionstatus"},Object(c.b)("em",{parentName:"a"},"CameraPermissionStatus")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L449"},"Camera.tsx:449")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"requestcamerapermission"},"requestCameraPermission"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"requestCameraPermission"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionrequestresult"},Object(c.b)("em",{parentName:"a"},"CameraPermissionRequestResult")),">"),Object(c.b)("p",null,'Shows a "request permission" alert to the user, and resolves with the new camera permission status.'),Object(c.b)("p",null,"If the user has previously blocked the app from using the camera, the alert will not be shown\nand ",Object(c.b)("inlineCode",{parentName:"p"},'"denied"')," will be returned."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionrequestresult"},Object(c.b)("em",{parentName:"a"},"CameraPermissionRequestResult")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L464"},"Camera.tsx:464")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"requestmicrophonepermission"},"requestMicrophonePermission"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"requestMicrophonePermission"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionrequestresult"},Object(c.b)("em",{parentName:"a"},"CameraPermissionRequestResult")),">"),Object(c.b)("p",null,'Shows a "request permission" alert to the user, and resolves with the new microphone permission status.'),Object(c.b)("p",null,"If the user has previously blocked the app from using the microphone, the alert will not be shown\nand ",Object(c.b)("inlineCode",{parentName:"p"},'"denied"')," will be returned."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"throws"))," ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},"CameraRuntimeError")," When any kind of error occured. Use the ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror#code"},"CameraRuntimeError.code")," property to get the actual error"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera#camerapermissionrequestresult"},Object(c.b)("em",{parentName:"a"},"CameraPermissionRequestResult")),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b93bb2a/src/Camera.tsx#L479"},"Camera.tsx:479")))}m.isMDXComponent=!0},119:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return u}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),m=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=m(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,u=p["".concat(i,".").concat(d)]||p[d]||l[d]||c;return t?n.a.createElement(u,o(o({ref:a},s),{},{components:t})):n.a.createElement(u,o({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var o={};for(var b in a)hasOwnProperty.call(a,b)&&(o[b]=a[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);