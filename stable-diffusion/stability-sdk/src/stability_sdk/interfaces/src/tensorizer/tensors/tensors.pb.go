// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.5
// source: tensors.proto

package tensors

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Dtype int32

const (
	Dtype_DT_INVALID    Dtype = 0
	Dtype_DT_FLOAT32    Dtype = 1
	Dtype_DT_FLOAT64    Dtype = 2
	Dtype_DT_FLOAT16    Dtype = 3
	Dtype_DT_BFLOAT16   Dtype = 4
	Dtype_DT_COMPLEX32  Dtype = 5
	Dtype_DT_COMPLEX64  Dtype = 6
	Dtype_DT_COMPLEX128 Dtype = 7
	Dtype_DT_UINT8      Dtype = 8
	Dtype_DT_INT8       Dtype = 9
	Dtype_DT_INT16      Dtype = 10
	Dtype_DT_INT32      Dtype = 11
	Dtype_DT_INT64      Dtype = 12
	Dtype_DT_BOOL       Dtype = 13
	Dtype_DT_QUINT8     Dtype = 14
	Dtype_DT_QINT8      Dtype = 15
	Dtype_DT_QINT32     Dtype = 16
	Dtype_DT_QUINT4_2   Dtype = 17
)

// Enum value maps for Dtype.
var (
	Dtype_name = map[int32]string{
		0:  "DT_INVALID",
		1:  "DT_FLOAT32",
		2:  "DT_FLOAT64",
		3:  "DT_FLOAT16",
		4:  "DT_BFLOAT16",
		5:  "DT_COMPLEX32",
		6:  "DT_COMPLEX64",
		7:  "DT_COMPLEX128",
		8:  "DT_UINT8",
		9:  "DT_INT8",
		10: "DT_INT16",
		11: "DT_INT32",
		12: "DT_INT64",
		13: "DT_BOOL",
		14: "DT_QUINT8",
		15: "DT_QINT8",
		16: "DT_QINT32",
		17: "DT_QUINT4_2",
	}
	Dtype_value = map[string]int32{
		"DT_INVALID":    0,
		"DT_FLOAT32":    1,
		"DT_FLOAT64":    2,
		"DT_FLOAT16":    3,
		"DT_BFLOAT16":   4,
		"DT_COMPLEX32":  5,
		"DT_COMPLEX64":  6,
		"DT_COMPLEX128": 7,
		"DT_UINT8":      8,
		"DT_INT8":       9,
		"DT_INT16":      10,
		"DT_INT32":      11,
		"DT_INT64":      12,
		"DT_BOOL":       13,
		"DT_QUINT8":     14,
		"DT_QINT8":      15,
		"DT_QINT32":     16,
		"DT_QUINT4_2":   17,
	}
)

func (x Dtype) Enum() *Dtype {
	p := new(Dtype)
	*p = x
	return p
}

func (x Dtype) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Dtype) Descriptor() protoreflect.EnumDescriptor {
	return file_tensors_proto_enumTypes[0].Descriptor()
}

func (Dtype) Type() protoreflect.EnumType {
	return &file_tensors_proto_enumTypes[0]
}

func (x Dtype) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Dtype.Descriptor instead.
func (Dtype) EnumDescriptor() ([]byte, []int) {
	return file_tensors_proto_rawDescGZIP(), []int{0}
}

type AttributeType int32

const (
	AttributeType_AT_PARAMETER AttributeType = 0
	AttributeType_AT_BUFFER    AttributeType = 1
)

// Enum value maps for AttributeType.
var (
	AttributeType_name = map[int32]string{
		0: "AT_PARAMETER",
		1: "AT_BUFFER",
	}
	AttributeType_value = map[string]int32{
		"AT_PARAMETER": 0,
		"AT_BUFFER":    1,
	}
)

func (x AttributeType) Enum() *AttributeType {
	p := new(AttributeType)
	*p = x
	return p
}

func (x AttributeType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (AttributeType) Descriptor() protoreflect.EnumDescriptor {
	return file_tensors_proto_enumTypes[1].Descriptor()
}

func (AttributeType) Type() protoreflect.EnumType {
	return &file_tensors_proto_enumTypes[1]
}

func (x AttributeType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use AttributeType.Descriptor instead.
func (AttributeType) EnumDescriptor() ([]byte, []int) {
	return file_tensors_proto_rawDescGZIP(), []int{1}
}

type Tensor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Dtype    Dtype          `protobuf:"varint,1,opt,name=dtype,proto3,enum=tensors.Dtype" json:"dtype,omitempty"`
	Shape    []int64        `protobuf:"varint,2,rep,packed,name=shape,proto3" json:"shape,omitempty"`
	Data     []byte         `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
	AttrType *AttributeType `protobuf:"varint,4,opt,name=attr_type,json=attrType,proto3,enum=tensors.AttributeType,oneof" json:"attr_type,omitempty"`
}

func (x *Tensor) Reset() {
	*x = Tensor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tensors_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Tensor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Tensor) ProtoMessage() {}

func (x *Tensor) ProtoReflect() protoreflect.Message {
	mi := &file_tensors_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Tensor.ProtoReflect.Descriptor instead.
func (*Tensor) Descriptor() ([]byte, []int) {
	return file_tensors_proto_rawDescGZIP(), []int{0}
}

func (x *Tensor) GetDtype() Dtype {
	if x != nil {
		return x.Dtype
	}
	return Dtype_DT_INVALID
}

func (x *Tensor) GetShape() []int64 {
	if x != nil {
		return x.Shape
	}
	return nil
}

func (x *Tensor) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *Tensor) GetAttrType() AttributeType {
	if x != nil && x.AttrType != nil {
		return *x.AttrType
	}
	return AttributeType_AT_PARAMETER
}

type Attribute struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Types that are assignable to Value:
	//	*Attribute_Module
	//	*Attribute_Tensor
	//	*Attribute_String_
	//	*Attribute_Int64
	//	*Attribute_Float
	//	*Attribute_Bool
	Value isAttribute_Value `protobuf_oneof:"value"`
}

func (x *Attribute) Reset() {
	*x = Attribute{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tensors_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Attribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Attribute) ProtoMessage() {}

func (x *Attribute) ProtoReflect() protoreflect.Message {
	mi := &file_tensors_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Attribute.ProtoReflect.Descriptor instead.
func (*Attribute) Descriptor() ([]byte, []int) {
	return file_tensors_proto_rawDescGZIP(), []int{1}
}

func (x *Attribute) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (m *Attribute) GetValue() isAttribute_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *Attribute) GetModule() *Module {
	if x, ok := x.GetValue().(*Attribute_Module); ok {
		return x.Module
	}
	return nil
}

func (x *Attribute) GetTensor() *Tensor {
	if x, ok := x.GetValue().(*Attribute_Tensor); ok {
		return x.Tensor
	}
	return nil
}

func (x *Attribute) GetString_() string {
	if x, ok := x.GetValue().(*Attribute_String_); ok {
		return x.String_
	}
	return ""
}

func (x *Attribute) GetInt64() int64 {
	if x, ok := x.GetValue().(*Attribute_Int64); ok {
		return x.Int64
	}
	return 0
}

func (x *Attribute) GetFloat() float32 {
	if x, ok := x.GetValue().(*Attribute_Float); ok {
		return x.Float
	}
	return 0
}

func (x *Attribute) GetBool() bool {
	if x, ok := x.GetValue().(*Attribute_Bool); ok {
		return x.Bool
	}
	return false
}

type isAttribute_Value interface {
	isAttribute_Value()
}

type Attribute_Module struct {
	Module *Module `protobuf:"bytes,3,opt,name=module,proto3,oneof"`
}

type Attribute_Tensor struct {
	Tensor *Tensor `protobuf:"bytes,4,opt,name=tensor,proto3,oneof"`
}

type Attribute_String_ struct {
	String_ string `protobuf:"bytes,5,opt,name=string,proto3,oneof"`
}

type Attribute_Int64 struct {
	Int64 int64 `protobuf:"varint,6,opt,name=int64,proto3,oneof"`
}

type Attribute_Float struct {
	Float float32 `protobuf:"fixed32,7,opt,name=float,proto3,oneof"`
}

type Attribute_Bool struct {
	Bool bool `protobuf:"varint,8,opt,name=bool,proto3,oneof"`
}

func (*Attribute_Module) isAttribute_Value() {}

func (*Attribute_Tensor) isAttribute_Value() {}

func (*Attribute_String_) isAttribute_Value() {}

func (*Attribute_Int64) isAttribute_Value() {}

func (*Attribute_Float) isAttribute_Value() {}

func (*Attribute_Bool) isAttribute_Value() {}

type Module struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name       string       `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Names      []string     `protobuf:"bytes,2,rep,name=names,proto3" json:"names,omitempty"`
	Attributes []*Attribute `protobuf:"bytes,3,rep,name=attributes,proto3" json:"attributes,omitempty"`
}

func (x *Module) Reset() {
	*x = Module{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tensors_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Module) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Module) ProtoMessage() {}

func (x *Module) ProtoReflect() protoreflect.Message {
	mi := &file_tensors_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Module.ProtoReflect.Descriptor instead.
func (*Module) Descriptor() ([]byte, []int) {
	return file_tensors_proto_rawDescGZIP(), []int{2}
}

func (x *Module) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Module) GetNames() []string {
	if x != nil {
		return x.Names
	}
	return nil
}

func (x *Module) GetAttributes() []*Attribute {
	if x != nil {
		return x.Attributes
	}
	return nil
}

var File_tensors_proto protoreflect.FileDescriptor

var file_tensors_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x74, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x07, 0x74, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x73, 0x22, 0xa0, 0x01, 0x0a, 0x06, 0x54, 0x65, 0x6e,
	0x73, 0x6f, 0x72, 0x12, 0x24, 0x0a, 0x05, 0x64, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x0e, 0x2e, 0x74, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x73, 0x2e, 0x44, 0x74, 0x79,
	0x70, 0x65, 0x52, 0x05, 0x64, 0x74, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x68, 0x61,
	0x70, 0x65, 0x18, 0x02, 0x20, 0x03, 0x28, 0x03, 0x52, 0x05, 0x73, 0x68, 0x61, 0x70, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x12, 0x38, 0x0a, 0x09, 0x61, 0x74, 0x74, 0x72, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x16, 0x2e, 0x74, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x73,
	0x2e, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x54, 0x79, 0x70, 0x65, 0x48, 0x00,
	0x52, 0x08, 0x61, 0x74, 0x74, 0x72, 0x54, 0x79, 0x70, 0x65, 0x88, 0x01, 0x01, 0x42, 0x0c, 0x0a,
	0x0a, 0x5f, 0x61, 0x74, 0x74, 0x72, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x22, 0xde, 0x01, 0x0a, 0x09,
	0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x29, 0x0a,
	0x06, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e,
	0x74, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x73, 0x2e, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x48, 0x00,
	0x52, 0x06, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x12, 0x29, 0x0a, 0x06, 0x74, 0x65, 0x6e, 0x73,
	0x6f, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x74, 0x65, 0x6e, 0x73, 0x6f,
	0x72, 0x73, 0x2e, 0x54, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x48, 0x00, 0x52, 0x06, 0x74, 0x65, 0x6e,
	0x73, 0x6f, 0x72, 0x12, 0x18, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x06, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x12, 0x16, 0x0a,
	0x05, 0x69, 0x6e, 0x74, 0x36, 0x34, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x48, 0x00, 0x52, 0x05,
	0x69, 0x6e, 0x74, 0x36, 0x34, 0x12, 0x16, 0x0a, 0x05, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x18, 0x07,
	0x20, 0x01, 0x28, 0x02, 0x48, 0x00, 0x52, 0x05, 0x66, 0x6c, 0x6f, 0x61, 0x74, 0x12, 0x14, 0x0a,
	0x04, 0x62, 0x6f, 0x6f, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x48, 0x00, 0x52, 0x04, 0x62,
	0x6f, 0x6f, 0x6c, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x66, 0x0a, 0x06,
	0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x61,
	0x6d, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x6e, 0x61, 0x6d, 0x65, 0x73,
	0x12, 0x32, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x73, 0x18, 0x03,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x74, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x73, 0x2e, 0x41,
	0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62,
	0x75, 0x74, 0x65, 0x73, 0x2a, 0x9e, 0x02, 0x0a, 0x05, 0x44, 0x74, 0x79, 0x70, 0x65, 0x12, 0x0e,
	0x0a, 0x0a, 0x44, 0x54, 0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x10, 0x00, 0x12, 0x0e,
	0x0a, 0x0a, 0x44, 0x54, 0x5f, 0x46, 0x4c, 0x4f, 0x41, 0x54, 0x33, 0x32, 0x10, 0x01, 0x12, 0x0e,
	0x0a, 0x0a, 0x44, 0x54, 0x5f, 0x46, 0x4c, 0x4f, 0x41, 0x54, 0x36, 0x34, 0x10, 0x02, 0x12, 0x0e,
	0x0a, 0x0a, 0x44, 0x54, 0x5f, 0x46, 0x4c, 0x4f, 0x41, 0x54, 0x31, 0x36, 0x10, 0x03, 0x12, 0x0f,
	0x0a, 0x0b, 0x44, 0x54, 0x5f, 0x42, 0x46, 0x4c, 0x4f, 0x41, 0x54, 0x31, 0x36, 0x10, 0x04, 0x12,
	0x10, 0x0a, 0x0c, 0x44, 0x54, 0x5f, 0x43, 0x4f, 0x4d, 0x50, 0x4c, 0x45, 0x58, 0x33, 0x32, 0x10,
	0x05, 0x12, 0x10, 0x0a, 0x0c, 0x44, 0x54, 0x5f, 0x43, 0x4f, 0x4d, 0x50, 0x4c, 0x45, 0x58, 0x36,
	0x34, 0x10, 0x06, 0x12, 0x11, 0x0a, 0x0d, 0x44, 0x54, 0x5f, 0x43, 0x4f, 0x4d, 0x50, 0x4c, 0x45,
	0x58, 0x31, 0x32, 0x38, 0x10, 0x07, 0x12, 0x0c, 0x0a, 0x08, 0x44, 0x54, 0x5f, 0x55, 0x49, 0x4e,
	0x54, 0x38, 0x10, 0x08, 0x12, 0x0b, 0x0a, 0x07, 0x44, 0x54, 0x5f, 0x49, 0x4e, 0x54, 0x38, 0x10,
	0x09, 0x12, 0x0c, 0x0a, 0x08, 0x44, 0x54, 0x5f, 0x49, 0x4e, 0x54, 0x31, 0x36, 0x10, 0x0a, 0x12,
	0x0c, 0x0a, 0x08, 0x44, 0x54, 0x5f, 0x49, 0x4e, 0x54, 0x33, 0x32, 0x10, 0x0b, 0x12, 0x0c, 0x0a,
	0x08, 0x44, 0x54, 0x5f, 0x49, 0x4e, 0x54, 0x36, 0x34, 0x10, 0x0c, 0x12, 0x0b, 0x0a, 0x07, 0x44,
	0x54, 0x5f, 0x42, 0x4f, 0x4f, 0x4c, 0x10, 0x0d, 0x12, 0x0d, 0x0a, 0x09, 0x44, 0x54, 0x5f, 0x51,
	0x55, 0x49, 0x4e, 0x54, 0x38, 0x10, 0x0e, 0x12, 0x0c, 0x0a, 0x08, 0x44, 0x54, 0x5f, 0x51, 0x49,
	0x4e, 0x54, 0x38, 0x10, 0x0f, 0x12, 0x0d, 0x0a, 0x09, 0x44, 0x54, 0x5f, 0x51, 0x49, 0x4e, 0x54,
	0x33, 0x32, 0x10, 0x10, 0x12, 0x0f, 0x0a, 0x0b, 0x44, 0x54, 0x5f, 0x51, 0x55, 0x49, 0x4e, 0x54,
	0x34, 0x5f, 0x32, 0x10, 0x11, 0x2a, 0x30, 0x0a, 0x0d, 0x41, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75,
	0x74, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x10, 0x0a, 0x0c, 0x41, 0x54, 0x5f, 0x50, 0x41, 0x52,
	0x41, 0x4d, 0x45, 0x54, 0x45, 0x52, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x41, 0x54, 0x5f, 0x42,
	0x55, 0x46, 0x46, 0x45, 0x52, 0x10, 0x01, 0x42, 0x29, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x77, 0x65, 0x61, 0x76, 0x65, 0x2f,
	0x74, 0x65, 0x6e, 0x73, 0x6f, 0x72, 0x69, 0x7a, 0x65, 0x72, 0x2f, 0x74, 0x65, 0x6e, 0x73, 0x6f,
	0x72, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_tensors_proto_rawDescOnce sync.Once
	file_tensors_proto_rawDescData = file_tensors_proto_rawDesc
)

func file_tensors_proto_rawDescGZIP() []byte {
	file_tensors_proto_rawDescOnce.Do(func() {
		file_tensors_proto_rawDescData = protoimpl.X.CompressGZIP(file_tensors_proto_rawDescData)
	})
	return file_tensors_proto_rawDescData
}

var file_tensors_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_tensors_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_tensors_proto_goTypes = []interface{}{
	(Dtype)(0),         // 0: tensors.Dtype
	(AttributeType)(0), // 1: tensors.AttributeType
	(*Tensor)(nil),     // 2: tensors.Tensor
	(*Attribute)(nil),  // 3: tensors.Attribute
	(*Module)(nil),     // 4: tensors.Module
}
var file_tensors_proto_depIdxs = []int32{
	0, // 0: tensors.Tensor.dtype:type_name -> tensors.Dtype
	1, // 1: tensors.Tensor.attr_type:type_name -> tensors.AttributeType
	4, // 2: tensors.Attribute.module:type_name -> tensors.Module
	2, // 3: tensors.Attribute.tensor:type_name -> tensors.Tensor
	3, // 4: tensors.Module.attributes:type_name -> tensors.Attribute
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_tensors_proto_init() }
func file_tensors_proto_init() {
	if File_tensors_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_tensors_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Tensor); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tensors_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Attribute); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_tensors_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Module); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_tensors_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_tensors_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*Attribute_Module)(nil),
		(*Attribute_Tensor)(nil),
		(*Attribute_String_)(nil),
		(*Attribute_Int64)(nil),
		(*Attribute_Float)(nil),
		(*Attribute_Bool)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_tensors_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_tensors_proto_goTypes,
		DependencyIndexes: file_tensors_proto_depIdxs,
		EnumInfos:         file_tensors_proto_enumTypes,
		MessageInfos:      file_tensors_proto_msgTypes,
	}.Build()
	File_tensors_proto = out.File
	file_tensors_proto_rawDesc = nil
	file_tensors_proto_goTypes = nil
	file_tensors_proto_depIdxs = nil
}
